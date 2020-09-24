import { SET_TOKEN_REQUEST, SET_TOKEN_SUCCESS, SET_TOKEN_FAIL, GET_AUTH_URL_REQUEST, GET_AUTH_URL_FAIL, GET_AUTH_URL_SUCCESS, LOG_IN, LOG_OUT } from '../actions/GlobalActions';

const getLogInStatus = () => {
    if (localStorage.getItem('isLogged') === 'true') {
        return true;
    } else if (localStorage.getItem('isLogged') === 'false') {
        return false;
    } else {
        return null;
    }
};

const initialState = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
    isTokenSetted: false,
    errors: {
        getAuthUrlError: '',
        setTokenError: '',
    },
    isLogged: getLogInStatus(),
    // isLogged: false - guest mode  
    // isLogged: null - must suggest authorization 
    // isLogged: true - get and set token
}

//TODO make visual msessages for auth

export function globalReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN: 
            return {
                ...state,
                isLogged: true
            }
        case LOG_OUT: 
            return {
                ...state,
                isLogged: false
            }

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