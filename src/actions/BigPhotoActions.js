import { unsplash } from '../utils/unsplash';
import { extractDateString, calcAspectRatio } from '../utils/utils';

export const GET_BIG_PHOTO_REQUEST = 'GET_BIG_PHOTO_REQUEST';
export const GET_BIG_PHOTO_SUCCESS = 'GET_BIG_PHOTO_SUCCESS';
export const GET_BIG_PHOTO_FAIL = 'GET_BIG_PHOTO_FAIL';
export const CLEAR_STORE = 'CLEAR_STORE';

const extractDataFromBigPhoto = (
    {
        id,
        alt_description,
        likes,
        urls: {regular},
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
        url: regular,
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