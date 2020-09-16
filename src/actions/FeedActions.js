import { unsplash } from '../utils/unsplash';
import { extractDateString, calcAspectRatio } from '../utils/utils';

export const GET_LAST_PHOTOS_REQUEST = 'GET_LAST_PHOTOS_REQUEST';
export const GET_LAST_PHOTOS_SUCCESS = 'GET_LAST_PHOTOS_SUCCESS';
export const GET_LAST_PHOTOS_FAIL = 'GET_LAST_PHOTOS_FAIL';
export const REMEMBER_SCROLL_POSITION = 'REMEMBER_SCROLL_POSITION';
export const GET_AUTH_URL_REQUEST = 'GET_AUTH_URL_REQUEST';
export const GET_AUTH_URL_SUCCESS = 'GET_AUTH_URL_SUCCESS';
export const GET_AUTH_URL_FAIL = 'GET_AUTH_URL_FAIL';

let pagecounter = 1;
let uniqueIDs = [];

const checkID = (id) => {
    if (uniqueIDs.some(uniqueID => id === uniqueID)) {    //if some of ids is not unique
        return false;
    }
    else {
        return true;
    }
};

const splitDataToColumns = (arr) => {
    const leftColSources = arr.filter((item, i) => {
        return i % 2 !== 0;
    });

    const rightColSources = arr.filter((item, i) => {
        return i % 2 === 0;
    });

    return {
        leftColSources,
        rightColSources
    }
};

//TODO make columns same height

const extractDataFromFeed = (arr) => {
    const photos = [];
    arr.map(({
            id,
            alt_description,
            likes,
            urls: {small},
            user: {
                first_name,
                links: {html}
            },
            updated_at,
            color,
            width,
            height,
            liked_by_user
        }) => {
            if (checkID(id)) {
                photos.push({
                    id,
                    alt_description: alt_description ? alt_description : '',
                    likes,
                    url: small,
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
                });
                uniqueIDs.push(id);
            }
        });
    if (arr.length > 60) {
        arr = arr.slice(-40);
    }
    return splitDataToColumns(photos);
};

const getURL = (dispatch) => {
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

export const getAuthUrl= () => {
    return dispatch => {
        dispatch({
            type: GET_AUTH_URL_REQUEST
        })

        getURL(dispatch);
    }
}

const getPhotos = (pageNumber, dispatch) => {
    unsplash.photos.listPhotos(pageNumber, 10, "latest")
        .then(res => res.json())
        .then(json => {
            dispatch( {
                type: GET_LAST_PHOTOS_SUCCESS,
                payload: extractDataFromFeed(json)
            });
        })
        .catch((e) => {
            setTimeout(() => {
                dispatch({
                    type: GET_LAST_PHOTOS_FAIL,
                    payload: new Error(e)
                });
            }, 200)
        });
};

export const getLastPhotos = () => {
    return dispatch => {
        dispatch({
            type: GET_LAST_PHOTOS_REQUEST
        });

        getPhotos(pagecounter++, dispatch);
    };
};

//TODO перенести сюда логику с cached, как здесь: https://github.com/maxfarseer/redux-course-ru-v2/blob/chp13-optimize-re-renders/src/actions/PageActions.jsфзз

export const rememberScrollPosition = (scrollTop) => {
    return dispatch => {
        dispatch({
            type: REMEMBER_SCROLL_POSITION,
            payload: scrollTop
        })
    }
}