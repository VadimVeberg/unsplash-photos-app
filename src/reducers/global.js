import { SET_TOKEN_REQUEST, SET_TOKEN_SUCCESS, SET_TOKEN_FAIL  } from '../actions/GlobalActions';

const initialState = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
    isTokenSetted: false,
    errors: {
        setTokenError: ''
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
        default: 
        return state;
    }
}