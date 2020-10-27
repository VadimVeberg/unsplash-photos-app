import { GET_LAST_PHOTOS_REQUEST, GET_LAST_PHOTOS_SUCCESS, GET_LAST_PHOTOS_FAIL, REMEMBER_SCROLL_POSITION } from '../actions/FeedActions';
import { LIKE_PHOTO_SUCCESS, UNLIKE_PHOTO_SUCCESS, } from '../actions/GlobalActions';

const initialState = {
    photos: {
        leftColSources: [],
        rightColSources: []
    },
    error: '',
    isFetching: false,
    isShowedOnce: false,    // to avoid requests when the user returns from big photo to feed
    scrollPosition: 0,
};

export function feedReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LAST_PHOTOS_REQUEST:
            return {                
                    ...state,
                    isFetching: true,
                    error: '',
            }
        case GET_LAST_PHOTOS_SUCCESS:
            return {
                    ...state,
                    isFetching: false,
                    error: '',
                    photos: {
                        leftColSources: [...state.photos.leftColSources, ...action.payload.leftColSources],
                        rightColSources: [...state.photos.rightColSources, ...action.payload.rightColSources]
                    },
                    isShowedOnce: true
            }
        case GET_LAST_PHOTOS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload.message
            }
        case REMEMBER_SCROLL_POSITION:
            return {
                ...state,
                scrollPosition: action.payload
            }
        case LIKE_PHOTO_SUCCESS:
            if (!state.isShowedOnce) {     //if feed wasn't loaded before user like photo
                return state;
            } else {
                const photos = createStoreWithChangedPhoto(state, action, true);
                return {
                    ...state,
                    photos
                }
            }
        case UNLIKE_PHOTO_SUCCESS:
            if (!state.isShowedOnce) {   
                return state;
            } else {
                const photos = createStoreWithChangedPhoto(state, action, false);
                return {
                    ...state,
                    photos
                }
            }
        default: 
            return state;
    }
}

const createStoreWithChangedPhoto = ({photos}, {payload}, isLiked) => {
    const photoId = payload;
    let { leftColSources, rightColSources } = photos;

    let index = leftColSources.findIndex(photo => photo.id === photoId);
     
    if (index !== -1) {           //if index was found in left column array
        leftColSources = leftColSources.map((elem, i) => {
            return i !== index ? elem : { ...elem, liked_by_user: !elem.liked_by_user, likes: (isLiked ? ++elem.likes : --elem.likes) };
        });
    } else {
        index = rightColSources.findIndex(photo => photo.id === photoId);
        rightColSources = rightColSources.map((elem, i) => {
            return i !== index ? elem : { ...elem, liked_by_user: !elem.liked_by_user, likes: (isLiked ? ++elem.likes : --elem.likes) };
        });
    } 

    return {
        rightColSources,
        leftColSources
    }

};