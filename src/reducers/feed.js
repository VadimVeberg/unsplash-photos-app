import { GET_LAST_PHOTOS_REQUEST, GET_LAST_PHOTOS_SUCCESS, GET_LAST_PHOTOS_FAIL, REMEMBER_SCROLL_POSITION, GET_AUTH_URL_REQUEST, GET_AUTH_URL_FAIL, GET_AUTH_URL_SUCCESS } from '../actions/FeedActions';

import { SET_TOKEN_REQUEST, SET_TOKEN_SUCCESS, SET_TOKEN_FAIL  } from '../actions/GlobalActions';

const initialState = {
    photos: {
        leftColSources: [],
        rightColSources: []
    },
    error: '',
    isFetching: false,
    isShowedOnce: false,  // to avoid requests when the user returns from big photo to feed
    scrollPosition: 0,
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
        case SET_TOKEN_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case SET_TOKEN_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case SET_TOKEN_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        
        default: 
        return state;
    }
}