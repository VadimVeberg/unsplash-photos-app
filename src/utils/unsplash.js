import Unsplash from 'unsplash-js';

const ACCESS_KEY = 'Rh-SnOUmGVX7Jvtpcqmsaiy4ggadjhly93TOWdzSDEA';
const SECRET_KEY = '-tugGRJ4cyeQETYdhWuGHnCfRzRVydtYxXzdQaKHfU8';
const CALLBACK_URL = 'https://unsplash-photos.ru/auth';
export const HOME_URL = 'https://unsplash-photos.ru';

export let unsplash= new Unsplash({
    accessKey: ACCESS_KEY,
    secret: SECRET_KEY,
    callbackUrl: CALLBACK_URL
});
