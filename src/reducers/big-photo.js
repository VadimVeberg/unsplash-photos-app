import { GET_BIG_PHOTO_REQUEST, GET_BIG_PHOTO_SUCCESS, GET_BIG_PHOTO_FAIL, CLEAR_STORE } from '../actions/BigPhotoActions';

const initialState = {
    bigPhotoData: {
    },
    error: '',
    isFetching: false
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
            console.log('cleared');
            return {
                initialState
            }
        default: 
        return state;
    }
}