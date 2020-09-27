import { GET_BIG_PHOTO_REQUEST, GET_BIG_PHOTO_SUCCESS, GET_BIG_PHOTO_FAIL, CLEAR_STORE } from '../actions/BigPhotoActions';
import { LIKE_PHOTO_REQUEST, LIKE_PHOTO_SUCCESS, LIKE_PHOTO_FAIL, UNLIKE_PHOTO_REQUEST, UNLIKE_PHOTO_SUCCESS, UNLIKE_PHOTO_FAIL } from '../actions/GlobalActions';
import { isEmpty } from '../utils/utils';

const initialState = {
    bigPhotoData: {},
    error: '',
    isFetching: false,
    likeError: '',
    unLikeError: ''
};


export function bigPhotoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BIG_PHOTO_REQUEST:
            return {
                    ...state,
                    isFetching: true,
                    error: '',
            }
        case GET_BIG_PHOTO_SUCCESS:
            return {
                    ...state,
                    isFetching: false,
                    error: '',
                    bigPhotoData: action.payload
            }
        case GET_BIG_PHOTO_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload.message
            }
        case CLEAR_STORE:
                return {
                initialState
            }
        case LIKE_PHOTO_REQUEST: 
            return {
                ...state,
                likeError: ''
            }
        case LIKE_PHOTO_SUCCESS: 
            return {
                ...state,
                bigPhotoData: {
                    ...state.bigPhotoData,
                    liked_by_user: true,                     //to renew data without request to API
                    likes: ++state.bigPhotoData.likes
                }
            }
        case LIKE_PHOTO_FAIL: 
            return {
                ...state,
                likeError: action.payload.message
            }
        case UNLIKE_PHOTO_REQUEST: 
            return  {
                ...state,
                unLikeError: ''
            }
        case UNLIKE_PHOTO_SUCCESS: 
            if (isEmpty(state.bigPhotoData)) {
                return state;
            } else if (action.payload === state.bigPhotoData.id) {
                return {
                    ...state,
                    bigPhotoData: {
                        ...state.bigPhotoData,
                        liked_by_user: false,                    //to renew data without request to API
                        likes: --state.bigPhotoData.likes
                    }
                }
            } else {
                return state;
            }
        case UNLIKE_PHOTO_FAIL: 
            return {
                ...state,
                unLikeError: action.payload.message
            }
        default: 
        return state;
    }
}