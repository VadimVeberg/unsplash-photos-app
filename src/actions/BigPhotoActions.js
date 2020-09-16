import { unsplash } from '../utils/unsplash';
import { extractDateString, calcAspectRatio } from '../utils/utils';
import { unstable_batchedUpdates } from 'react-dom';

export const GET_BIG_PHOTO_REQUEST = 'GET_BIG_PHOTO_REQUEST';
export const GET_BIG_PHOTO_SUCCESS = 'GET_BIG_PHOTO_SUCCESS';
export const GET_BIG_PHOTO_FAIL = 'GET_BIG_PHOTO_FAIL';
export const CLEAR_STORE = 'CLEAR_STORE';
export const LIKE_PHOTO_REQUEST = 'LIKE_PHOTO_REQUEST';
export const LIKE_PHOTO_SUCCESS = 'LIKE_PHOTO_SUCCESS';
export const LIKE_PHOTO_FAIL = 'LIKE_PHOTO_FAIL';
export const UNLIKE_PHOTO_REQUEST = 'UNLIKE_PHOTO_REQUEST';
export const UNLIKE_PHOTO_SUCCESS = 'UNLIKE_PHOTO_SUCCESS';
export const UNLIKE_PHOTO_FAIL = 'UNLIKE_PHOTO_FAIL';

const extractDataFromBigPhoto = (
    {
        id,
        alt_description,
        likes,
        urls: {full},
        user: {
            first_name,
            links: {html}
        },
        updated_at,
        color,
        width,
        height,
        liked_by_user
    }
) => {
    return {
        id,
        alt: alt_description ? alt_description : '',
        likes,
        url: full,
        user: {
            name: first_name,
            link: html
        },
        dateAdded: extractDateString(updated_at),
        preRender: {
            color,
            ratio: calcAspectRatio(width, height)
        },
        liked_by_user
    }
}
//TODO when refreshing page bearerToken is not set, make global action for this 

const getBigPhotoData = (id, dispatch) => {
    unsplash.photos.getPhoto(id)
    .then(res => res.json())
    .then(json => {
        dispatch( {
            type: GET_BIG_PHOTO_SUCCESS,
            payload: extractDataFromBigPhoto(json)
        });
    })
    .catch((e) => {
        setTimeout(() => {
            dispatch({
                type: GET_BIG_PHOTO_FAIL,
                payload: new Error(e)
            });
        }, 200)
    })

}

const likePhotoAction = (id, dispatch) => {
    unsplash.photos.likePhoto(id)
    .then(res => res.json())
    .then(json => {
        dispatch({
            type: LIKE_PHOTO_SUCCESS,
            payload: json
        });

        dispatch({
            type: GET_BIG_PHOTO_REQUEST
        });
    
        getBigPhotoData(id, dispatch);
    })
    .catch(e => {
        dispatch({
            type: LIKE_PHOTO_FAIL,
            payload: new Error(e)
        })
    }); 
};

const unLikePhotoAction = (id, dispatch) => {
    unsplash.photos.unlikePhoto(id)
    .then(res => res.json())
    .then(json => {
        dispatch({
            type: UNLIKE_PHOTO_SUCCESS,
            payload: json
        });
        
        dispatch({
            type: GET_BIG_PHOTO_REQUEST
        });
    
        getBigPhotoData(id, dispatch);
    })
    .catch(e => {
        dispatch({
            type: UNLIKE_PHOTO_FAIL,
            payload: new Error(e)
        })
    });
};

export const getBigPhoto = (id) => {
    return dispatch => {
        dispatch({
            type: GET_BIG_PHOTO_REQUEST
        })

        getBigPhotoData(id, dispatch);
    };
};

export const clearStore = () => {
    return dispatch => {
        dispatch({
            type: CLEAR_STORE
        });
    }
};

export const likePhoto = (id) => {
    return dispatch => {
        dispatch({
            type: LIKE_PHOTO_REQUEST
        });

        likePhotoAction(id, dispatch);
    };
};

export const unLikePhoto = (id) => {
    return dispatch => {
        dispatch({
            type: UNLIKE_PHOTO_REQUEST
        });

        unLikePhotoAction(id, dispatch);
    };
};