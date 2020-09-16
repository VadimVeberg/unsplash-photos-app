import { GET_LAST_PHOTOS_REQUEST, GET_LAST_PHOTOS_SUCCESS, GET_LAST_PHOTOS_FAIL, REMEMBER_SCROLL_POSITION, GET_AUTH_URL_REQUEST, GET_AUTH_URL_FAIL, GET_AUTH_URL_SUCCESS,
AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL } from '../actions/FeedActions';

const initialState = {
    photos: {
        leftColSources: [],
        rightColSources: []
    },
    error: '',
    isFetching: false,
    isShowedOnce: false,  // to avoid requests when the user returns from big photo to feed
    scrollPosition: 0,
    //TODO remove it if unneccessary
    isScrollPositionSetted: false   // to render component after setting scroll position
}

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
        case GET_AUTH_URL_REQUEST:
            return {                
                ...state,
                isFetching: true,
                error: '',
            }
        case GET_AUTH_URL_SUCCESS:
            return {                
                ...state,
                isFetching: false,
            }
        case GET_AUTH_URL_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload.message                
            }
        case AUTH_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case AUTH_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        
        default: 
        return state;
    }
}