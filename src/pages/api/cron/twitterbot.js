import {twitterClient, twitterBearer} from "@/lib/twitterAPI";

export default async function handler(req, res) {
  await twitterClient.v2.tweetThread();

  return res.status(200).json({ message: 'OK' });
}
