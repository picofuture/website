import {supabase} from "@/lib/supabaseClient";
import {SOCIAL_MEDIA_BLOG_POSTS} from "@/lib/sharedConsts";
import {tweetThread} from "@/lib/twitterAPI";

const getFormattedArticleContent = async () => {
  const selectResponse = await supabase
    .from(SOCIAL_MEDIA_BLOG_POSTS)
    .select('*')
    .eq('is_posted', 0)
    .neq('formatted_content', null);

  if (selectResponse.error || selectResponse.status !== 200) {
    return null;
  }

  return selectResponse.data[0];
}

const updateArticleIsPostedInDB = async (article) => {
  const updateResponse = await supabase
    .from(SOCIAL_MEDIA_BLOG_POSTS)
    .update({ is_posted: 1 })
    .eq('id', article.id);

  return !(updateResponse.error || (updateResponse.status >= 300 || updateResponse.status < 200));
}

export default async function handler(request, response) {
  // if (request.query.key !== process.env.TWITTER_BOT_CRON_JOB_KEY) {
  //   response.status(404).end();
  //   return;
  // }
  //
  // const dbRecord = await getFormattedArticleContent();
  //
  // if (!dbRecord) {
  //   response.status(200).json({ success: false });
  //   return;
  // }
  //
  // await tweetThread(dbRecord.formatted_content);
  //
  // await updateArticleIsPostedInDB(dbRecord);
  //
  // response.status(200).json({ success: true });
}
