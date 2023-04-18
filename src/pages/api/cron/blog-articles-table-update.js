import {supabase} from "@/lib/supabaseClient";
import {SOCIAL_MEDIA_BLOG_POSTS} from "@/lib/sharedConsts";
import {getAllArticles} from "@/lib/getAllArticles";
import fs from "fs";

const getStoredArticles = async () => {
  const selectResponse = await supabase
    .from(SOCIAL_MEDIA_BLOG_POSTS)
    .select('*');

  if (selectResponse.error || selectResponse.status !== 200) {
    return [];
  }

  return selectResponse.data;
}

const readRawFileContent = (slug) => {
  return fs.readFileSync(`src/pages/articles/${slug}.mdx`, 'utf8');
}

const getFilteredArticles = async () => {
  const storedArticles = await getStoredArticles();
  const allArticles = await getAllArticles();

  const existingArticleSlugsArray = storedArticles.map((article) => article.slug);

  return allArticles.filter(article => {
    return !existingArticleSlugsArray.includes(article.slug);
  });
}

const insertProcessedArticleInDB = async (article, rawContent) => {
  const insertResponse = await supabase
    .from(SOCIAL_MEDIA_BLOG_POSTS)
    .insert(
      [
        {
          slug: article.slug,
          raw_content: rawContent,
          target_platform: 'twitter',
          is_posted: 0,
        }
      ]
    );

  return !(insertResponse.error || insertResponse.status !== 201);
}

export default async function handler(request, response) {
  if (request.query.key !== process.env.TWITTER_BOT_CRON_JOB_KEY) {
    response.status(404).end();
    return;
  }

  const filteredArticles = await getFilteredArticles();

  if (!filteredArticles) {
    response.status(200).json({ success: false });
    return;
  }

  // We will only deal with 1 article at a time.
  const article = filteredArticles[0];

  const rawFileContent = readRawFileContent(article.slug);

  const insertResponse = await insertProcessedArticleInDB(article, rawFileContent);

  if (!insertResponse) {
    response.status(200).json({ success: false });
    return;
  }

  response.status(200).json({ success: true });
}
