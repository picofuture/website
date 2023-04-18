const createClient = require('@supabase/supabase-js').createClient;
const { Configuration, OpenAIApi } = require("openai");

// This is here for testing purposes only.
// On local, we need to load the environment variables. Because I won't be using next js.
// On production, they will be read from github secrets.
if (process.env.NODE_ENV === 'develop') {
  require('../lib/loadEnv');
}

const SOCIAL_MEDIA_BLOG_POSTS = 'social_media_blog_posts';
const DELIMITER = '[,]';
const TWITTER_MAX_CHARS_PER_TWEET = 280;

const getSupabaseClient = () => {
  return createClient(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}`,
    `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
  );
}

const getOpenAIClient = () => {
  const configuration = new Configuration({
    organization: process.env.OPEN_AI_ORGANIZATION,
    apiKey: process.env.OPEN_AI_API_KEY,
  });

  return new OpenAIApi(configuration);
}

const getArticleToProcess = async () => {
  const selectResponse = await getSupabaseClient()
    .from(SOCIAL_MEDIA_BLOG_POSTS)
    .select('*')
    .eq('is_posted', 0)
    .is('formatted_content', null)

  if (selectResponse.error || selectResponse.status !== 200) {
    return null;
  }

  return selectResponse.data[0];
}

const updateArticleInDB = async (article, formattedContent) => {
  const updateResponse = await getSupabaseClient()
    .from(SOCIAL_MEDIA_BLOG_POSTS)
    .update({ formatted_content: formattedContent })
    .eq('id', article.id);

  return !(updateResponse.error || (updateResponse.status >= 300 || updateResponse.status < 200));
}

const generateThread = async (articleName, content) => {
  const response = await getOpenAIClient().createChatCompletion({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a social media manager who posts engaging tweets on Twitter.\n
        Create an engaging but brief Twitter thread based on the topic "${articleName}" using the content I will provide you.\n
        Do not include markdown.\n
        Make sure to include relevant hashtags.\n
        Separate each tweet with a delimiter ${DELIMITER}.\n
        Absolutely make sure length of each tweet in the thread must not exceed ${TWITTER_MAX_CHARS_PER_TWEET} characters.\n
        `
      },
      {
        role: "user",
        content: content
      }
    ],
    temperature: 1,
  });

  return response.data.choices[0].message.content;
}

const addAdvertisementToArray = (threadArray, article) => {
  threadArray.push(`This Twitter thread was created by GPT-4. You can read the full blog post here: ${process.env.NEXT_PUBLIC_SITE_URL}/articles/${article.slug}`);

  return threadArray;
}

const getFormattedThreadArray = (gptResponse, article) => {
  let localResponse = gptResponse;

  localResponse = localResponse.split(DELIMITER);

  localResponse = localResponse.map((tweet) => tweet.startsWith('\n\n') ? tweet.slice(2) : tweet)

  localResponse = addAdvertisementToArray(localResponse, article);

  return localResponse;
}

const main = async () => {
  console.log('Starting the Twitter Bot');

  const article = await getArticleToProcess();

  if (!article) {
    console.log('No article to process');
    return;
  }

  const formattedResponse = await generateThread(article.slug, article.raw_content);

  const formattedThreadArray = getFormattedThreadArray(formattedResponse, article);

  const updateResult = await updateArticleInDB(article, formattedThreadArray);

  console.log('Updated article in DB', updateResult ? 'successfully' : 'unsuccessfully');
}

main();
