import Unsplash from 'unsplash-js';

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
const SECRET_KEY = process.env.REACT_APP_ECRET_KEY;
const CALLBACK_URL = process.env.REACT_APP_CALLBACK_URL;
export const HOME_URL = process.env.REACT_APP_HOME_URL;

export let unsplash= new Unsplash({
    accessKey: ACCESS_KEY,
    secret: SECRET_KEY,
    callbackUrl: CALLBACK_URL
}); 
