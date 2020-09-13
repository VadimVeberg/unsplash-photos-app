import {USER_LOGIN_REQUEST} from '../actions/UserActions';
import {USER_LOGIN_SUCCESS} from '../actions/UserActions';
import {USER_LOGIN_FAIL} from '../actions/UserActions';


const initialState = {
    error: '', 
    isFetching: false, 
}
  
export function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {...state, isFetching: true, error: ''}
        case USER_LOGIN_SUCCESS:
            return {...state, isFetching: false, error: ''}
        case USER_LOGIN_FAIL:
            return {...state, isFetching: false, error: action.payload}
        default: 
            return state
    }
}