import {getAllArticles} from "../lib/getAllArticles.js";
import {supabase} from "../lib/supabaseClient.js";
import {TWITTER_POSTS} from "../lib/sharedConsts.js";

// This is here for testing purposes only.
// On local, we need to load the environment variables. Because I won't be using next js.
// On production, they will be read from github secrets.
if (process.env.NODE_ENV === 'develop') {
  require('../lib/loadEnv');
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

const getFilteredArticles = async (existingArticlesArray) => {
  const allArticles = await getAllArticles();

  return allArticles.filter(article => {
    return !existingArticlesArray.includes(article.slug);
  });
}

const getStoredArticles = async () => {
  const selectResponse = await supabase
    .from(TWITTER_POSTS)
    .select('*');

  if (selectResponse.error || selectResponse.status !== 200) {
    return null
  }

  return selectResponse.data;
}

const main = async () => {
  const storedArticles = await getStoredArticles();
  console.log('storedArticles', storedArticles);
}

await main();
