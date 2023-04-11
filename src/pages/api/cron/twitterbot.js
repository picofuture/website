import {supabase} from "@/lib/supabaseClient";
import {BOT_SOCIAL_MEDIA_POSTS} from "@/lib/sharedConsts";
import {map} from "lodash";
import {getAllArticles} from "@/lib/getAllArticles";
import fs from "fs";
import openai from "@/lib/openAIAPI";
import {tweetThread} from "@/lib/twitterAPI";

export default async function handler(request, response) {
  if (request.query.key !== process.env.TWITTER_BOT_CRON_JOB_KEY) {
    response.status(404).end();
    return;
  }

  const storedArticles = await getStoredArticles();

  if (!storedArticles) {
    response.status(200).json({ success: false });
    return;
  }

  const filteredArticles = await getFilteredArticles(map(storedArticles, 'article_slug'));

  if (filteredArticles) {
    await processFilteredArticles(filteredArticles);
  }

  response.status(200).json({ success: true });
}

const getStoredArticles = async () => {
  const selectResponse = await supabase
    .from(BOT_SOCIAL_MEDIA_POSTS)
    .select('*');

  if (selectResponse.error || selectResponse.status !== 200) {
    return null
  }

  return selectResponse.data;
}

const getFilteredArticles = async (existingArticlesArray) => {
   const allArticles = await getAllArticles();

   return allArticles.filter(article => {
     return !existingArticlesArray.includes(article.slug);
   });
}

const insertProcessedArticleInDB = async (slug) => {
  const insertResponse = await supabase
    .from(BOT_SOCIAL_MEDIA_POSTS)
    .insert([{ article_slug: slug }]);

  return !(insertResponse.error || insertResponse.status !== 201);
};

const readRawFileContent = (slug) => {
  return fs.readFileSync(`src/pages/articles/${slug}.mdx`, 'utf8');
}

const generatePrompt = (articleName, content) => {
  return `
  Create an engaging and detailed Twitter thread based on the blog content with the topic "${articleName}" given below. 
  Make sure to include relevant hashtags.
  
  Context: ${content}
  
  
  `;
}

const addAdvertisementToArray = (threadArray, article) => {
  threadArray.push(`This Twitter thread was created by GPT-4. You can read the full blog post here: ${process.env.NEXT_PUBLIC_SITE_URL}/articles/${article.slug}`);

  return threadArray;
}

const processFilteredArticles = async (filteredArticles) => {
  // We are only going to post about 1 article / day.
  const article = filteredArticles[0];

  const content = readRawFileContent(article.slug);

  const prompt = generatePrompt(article.slug.replaceAll('-', ' '), content);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a Twitter bot who creates Twitter threads based on the given blog content."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 1,
  });

  const twitterThread = response.data.choices[0].message.content;

  const threadArray = [];

  for (const tweet of twitterThread.split('\n')) {
    if (tweet === '') {
      continue;
    }

    threadArray.push(tweet.replace('THREAD: ', ''));
  }

  addAdvertisementToArray(threadArray, article);

  await tweetThread(threadArray);

  await insertProcessedArticleInDB(article.slug);
}
