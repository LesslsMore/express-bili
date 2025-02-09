import { TwitterApi } from 'twitter-api-v2';



async function twitter() {
    const client = new TwitterApi({
        appKey: process.env.CONSUMER_KEY,
        appSecret: process.env.CONSUMER_SECRET,
        accessToken: process.env.oauth_token, // oauth token from previous step (link generation)
        accessSecret: process.env.oauth_token_secret, // oauth token secret from previous step (link generation)
    });

    const { data: createdTweet } = await client.v2.tweet('twitter-api-v2 is awesome!', {
        poll: { duration_minutes: 120, options: ['Absolutely', 'For sure!'] },
    });
    console.log('Tweet', createdTweet.id, ':', createdTweet.text);

    // const createdTweet = await client.v1.tweet('twitter-api-v2 is awesome!', {
    //     lat: 1.23,
    //     long: -13.392,
    // });
    // console.log('Tweet', createdTweet.id_str, ':', createdTweet.full_text);
}


export {
    twitter,
};
