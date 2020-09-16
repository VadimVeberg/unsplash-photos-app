import { SET_TOKEN_REQUEST, SET_TOKEN_SUCCESS, SET_TOKEN_FAIL, GET_AUTH_URL_REQUEST, GET_AUTH_URL_FAIL, GET_AUTH_URL_SUCCESS  } from '../actions/GlobalActions';

const initialState = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
    isTokenSetted: false,
    errors: {
        getAuthUrlError: '',
        setTokenError: '',
    }
}

//TODO make visual messages for auth

export function globalReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN_REQUEST:
            return {                
                ...state,
                error: {
                    setTokenError: ''
                },
            }
        case SET_TOKEN_SUCCESS:
            return {
                ...state,
                isTokenSetted: true
            }
        case SET_TOKEN_FAIL:
            return {
                ...state,
                error: {
                    setTokenError: `Can't set token: ${action.payload}`
                },
                isTokenSetted: false
            }

        case GET_AUTH_URL_REQUEST:
            return {                
                ...state,
            }
        case GET_AUTH_URL_SUCCESS:
            return {                
                ...state,
            }
        case GET_AUTH_URL_FAIL:
            return {
                ...state,
                error: {
                    ...state.error,
                    getAuthUrlError: `Can't get auth url: ${action.payload}`
                }            
            }
        default: 
        return state;
    }
}