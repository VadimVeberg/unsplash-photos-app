import {USER_LOGIN_REQUEST} from '../actions/UserActions';
import {USER_LOGIN_SUCCESS} from '../actions/UserActions';
import {USER_LOGIN_FAIL} from '../actions/UserActions';


const initialState = {
    name: '',
    error: '', // добавили для сохранения текста ошибки
    isFetching: false, // добавили для реакции на статус "загружаю" или нет
}
  
export function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {...state, isFetching: true, error: ''}
        break;
        case USER_LOGIN_SUCCESS:
            return {...state, name: action.payload, isFetching: false}
        break;
        case USER_LOGIN_FAIL:
            return {...state, isFetching: false, error: action.payload}
        break;
        default: 
            return state
        break;
    }
}