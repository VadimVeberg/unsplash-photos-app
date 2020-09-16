import { unsplash } from '../utils/unsplash';

export const SET_TOKEN_REQUEST = 'SET_TOKEN_REQUEST';
export const SET_TOKEN_SUCCESS = 'SET_TOKEN_SUCCESS';
export const SET_TOKEN_FAIL = 'SET_TOKEN_FAIL';

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