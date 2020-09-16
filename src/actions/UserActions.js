import { unsplash, HOME_URL } from '../utils/unsplash';

export const GET_TOKEN_REQUEST = 'GET_TOKEN_REQUEST';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_FAIL = 'GET_TOKEN_FAIL';

const getToken = (dispatch) => {
   
    //eslint-disable-next-line no-undef
    const code = window.location.search.split('code=')[1];
    if (code) {
        unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {

            console.log(json);
            console.log(code);
            localStorage.setItem('token', json.access_token);
            dispatch({
                type: GET_TOKEN_SUCCESS,
            });

            window.location.assign(HOME_URL);
        })
        .catch(e => {
            dispatch( {
                type: GET_TOKEN_FAIL,
                payload: e.message
            })
        })
    }
}

export function handleLogin() {
    return dispatch => {
        dispatch({
            type: GET_TOKEN_REQUEST
        })

        getToken(dispatch);
    }
}