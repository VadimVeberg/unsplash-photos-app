import Unsplash from 'unsplash-js';
import {ACCESS_KEY, SECRET_KEY, CALLBACK_URL} from '../utils/auth';


export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

let unsplash;
const auth = () => {
    unsplash= new Unsplash({
        accessKey: ACCESS_KEY,
        secret: SECRET_KEY,
        callbackUrl: CALLBACK_URL
    });

    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
        "public",
        "write_likes"
      ]);
      //eslint-disable-next-line no-undef
      window.location.assign(authenticationUrl);
}

export function handleLogin() {
    return dispatch => {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        auth();
    }
}