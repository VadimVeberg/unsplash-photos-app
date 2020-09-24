import {GET_TOKEN_REQUEST} from '../actions/UserActions';
import {GET_TOKEN_SUCCESS} from '../actions/UserActions';
import {GET_TOKEN_FAIL} from '../actions/UserActions';

const initialState = {
    error: '', 
    isFetching: false
};
  
export function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TOKEN_REQUEST:
            return {...state, isFetching: true, error: ''}
        case GET_TOKEN_SUCCESS:
            return {...state, isFetching: false, error: ''}
        case GET_TOKEN_FAIL:
            return {...state, isFetching: false, error: action.payload}
        default: 
            return state
    }
};