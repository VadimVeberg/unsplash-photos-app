import { GET_BIG_PHOTO_REQUEST, GET_BIG_PHOTO_SUCCESS, GET_BIG_PHOTO_FAIL, CLEAR_STORE, LIKE_PHOTO_REQUEST, LIKE_PHOTO_SUCCESS, LIKE_PHOTO_FAIL, UNLIKE_PHOTO_REQUEST, UNLIKE_PHOTO_SUCCESS, UNLIKE_PHOTO_FAIL } from '../actions/BigPhotoActions';

const initialState = {
    bigPhotoData: {
    },
    error: '',
    isFetching: false,
}

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
                ...state
            }
        case LIKE_PHOTO_SUCCESS: 
            return {
                ...state,
                bigPhotoData: {
                    ...state.bigPhotoData,
                    liked_by_user: true
                }
            }
        case LIKE_PHOTO_FAIL: 
            return state
        case UNLIKE_PHOTO_REQUEST: 
            return state
        case UNLIKE_PHOTO_SUCCESS: 
            return {
                ...state,
                bigPhotoData: {
                    ...state.bigPhotoData,
                    liked_by_user: false
                }
            }
        case UNLIKE_PHOTO_FAIL: 
            return state
        default: 
        return state;
    }
}