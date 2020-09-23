import { unsplash } from '../utils/unsplash';

 //this global actions allows  authorize from any page of app:
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SET_TOKEN_REQUEST = 'SET_TOKEN_REQUEST';
export const SET_TOKEN_SUCCESS = 'SET_TOKEN_SUCCESS';
export const SET_TOKEN_FAIL = 'SET_TOKEN_FAIL';
export const GET_AUTH_URL_REQUEST = 'GET_AUTH_URL_REQUEST';
export const GET_AUTH_URL_SUCCESS = 'GET_AUTH_URL_SUCCESS';
export const GET_AUTH_URL_FAIL = 'GET_AUTH_URL_FAIL';

export const logIn = () => {
    sessionStorage.setItem('isLogged', true);
    return {
        type: LOG_IN
    }
}

export const logOut = () => {
    sessionStorage.setItem('isLogged', false);
    return {
        type: LOG_OUT
    }
}
 
export const setToken = (token) => {   
    return dispatch => {
        dispatch({
            type: SET_TOKEN_REQUEST
        });
//TODO test error by replacing token in local storage for wrong value
        try {
            unsplash.auth.setBearerToken(token);
            dispatch({
                type: SET_TOKEN_SUCCESS
            });
        }
        catch (e) {
            dispatch({
                type: SET_TOKEN_FAIL,
                payload: e.message
            });
        }
    }
};

export const getAuthUrl = () => {
    return dispatch => {
        dispatch({
            type: GET_AUTH_URL_REQUEST
        })

        try {
            const authenticationUrl = unsplash.auth.getAuthenticationUrl([
                "public",
                "write_likes"
            ]);
    
            if (authenticationUrl) {
                dispatch({
                    type: GET_AUTH_URL_SUCCESS
                })
            }
        
            //eslint-disable-next-line no-undef
            window.location.assign(authenticationUrl);
        } catch (e) {
            dispatch({
                type: GET_AUTH_URL_FAIL,
                payload: e.message
            });
        }
    }
}