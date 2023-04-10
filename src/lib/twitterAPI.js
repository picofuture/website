import { TwitterApi } from 'twitter-api-v2';

const client = new TwitterApi({
  appKey: process.env.TWITTER_CONSUMER_API_KEY,
  appSecret: process.env.TWITTER_CONSUMER_API_KEY_SECRET,
  accessToken: process.env.TWITTER_ACCOUNT_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCOUNT_ACCESS_TOKEN_SECRET,
});

const bearer = new TwitterApi(process.env.TWITTER_AUTHENTICATION_BEARER_TOKEN);

const twitterClient = client.readWrite;
const twitterBearer = bearer.readOnly;

export const tweetThread = (tweetsArray) => {
  return twitterClient.v2.tweetThread(tweetsArray);
};

export const tweetSingle = (tweetString) => {
  return twitterClient.v2.tweet(tweetString);
};
