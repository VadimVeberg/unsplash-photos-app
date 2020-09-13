import { unsplash } from '../utils/unsplash';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

const auth = (dispatch) => {
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
        "public",
        "write_likes"
    ]);

    //eslint-disable-next-line no-undef
    window.location.assign(authenticationUrl);

    //eslint-disable-next-line no-undef
    const code = window.location.search.split('code=')[1];

    if (code) {
        unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {

            unsplash.auth.setBearerToken(json.access_token);

            dispatch({
                type: USER_LOGIN_SUCCESS
            });
        })
        .catch(e => {
            dispatch( {
                type: USER_LOGIN_FAIL,
                payload: 'Can\'t auth'
            })
        })
    }
}

export function handleLogin() {
    return dispatch => {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        auth(dispatch);
    }
}