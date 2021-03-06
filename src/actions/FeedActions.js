import { unsplash } from '../utils/unsplash';
import { extractDateString, calcAspectRatio } from '../utils/utils';

export const GET_LAST_PHOTOS_REQUEST = 'GET_LAST_PHOTOS_REQUEST';
export const GET_LAST_PHOTOS_SUCCESS = 'GET_LAST_PHOTOS_SUCCESS';
export const GET_LAST_PHOTOS_FAIL = 'GET_LAST_PHOTOS_FAIL';
export const REMEMBER_SCROLL_POSITION = 'REMEMBER_SCROLL_POSITION';

let uniqueIDs = [];

let pageCounter = 1;

const checkID = (id) => {
    if (uniqueIDs.some(uniqueID => id === uniqueID)) {    
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

export const getLastPhotos = () => {
    return dispatch => {
        dispatch({
            type: GET_LAST_PHOTOS_REQUEST
        });

        unsplash.photos.listPhotos(++pageCounter, 10, "latest")
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
              }, 200);
          });
    }
}

export const rememberScrollPosition = (scrollTop) => {
    return dispatch => {
        dispatch({
            type: REMEMBER_SCROLL_POSITION,
            payload: scrollTop
        })
    }
};