import {tweetThread} from "@/lib/twitterAPI";

export default function handler(request, response) {
  if (request.query.key !== process.env.TWITTER_BOT_CRON_JOB_KEY) {
    response.status(404).end();
    return;
  }

  response.status(200).json({ success: true });
}
