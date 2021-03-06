import { unsplash } from '../utils/unsplash';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const CLEAR_STORE = 'CLEAR_STORE';
export const SET_TOKEN_REQUEST = 'SET_TOKEN_REQUEST';
export const SET_TOKEN_SUCCESS = 'SET_TOKEN_SUCCESS';
export const SET_TOKEN_FAIL = 'SET_TOKEN_FAIL';
export const GET_AUTH_URL_REQUEST = 'GET_AUTH_URL_REQUEST';
export const GET_AUTH_URL_SUCCESS = 'GET_AUTH_URL_SUCCESS';
export const GET_AUTH_URL_FAIL = 'GET_AUTH_URL_FAIL';
export const LIKE_PHOTO_REQUEST = 'LIKE_PHOTO_REQUEST';
export const LIKE_PHOTO_SUCCESS = 'LIKE_PHOTO_SUCCESS';
export const LIKE_PHOTO_FAIL = 'LIKE_PHOTO_FAIL';
export const UNLIKE_PHOTO_REQUEST = 'UNLIKE_PHOTO_REQUEST';
export const UNLIKE_PHOTO_SUCCESS = 'UNLIKE_PHOTO_SUCCESS';
export const UNLIKE_PHOTO_FAIL = 'UNLIKE_PHOTO_FAIL';


export const logIn = () => {
    localStorage.setItem('isLogged', true);

    return {
        type: LOG_IN
    }
}

export const logOut = () => {
    localStorage.setItem('isLogged', false);
    localStorage.removeItem('token');
    return {
        type: LOG_OUT
    }
}

export const setToken = (token) => {   
    return dispatch => {
        dispatch({
            type: SET_TOKEN_REQUEST
        });

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
};
export const likePhoto = (id) => {
    return dispatch => {
        dispatch({
            type: LIKE_PHOTO_REQUEST
        });

        unsplash.photos.likePhoto(id)
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: LIKE_PHOTO_SUCCESS,
                payload: id
            });
        })
        .catch(e => {
            dispatch({
                type: LIKE_PHOTO_FAIL,
                payload: new Error(e)
            })
        }); 
    };
};

export const unLikePhoto = (id) => {
    return dispatch => {
        dispatch({
            type: UNLIKE_PHOTO_REQUEST
        });

        unsplash.photos.unlikePhoto(id)
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: UNLIKE_PHOTO_SUCCESS,
                payload: id
            });
            
        })
        .catch(e => {
            dispatch({
                type: UNLIKE_PHOTO_FAIL,
                payload: new Error(e)
            })
        });
    };
};