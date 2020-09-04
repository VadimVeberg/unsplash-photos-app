import { combineReducers } from 'redux';
import {feedReducer} from './feed';
import {photoCardReducer} from './photo-card';
import {userReducer} from './user';

export const rootReducer = combineReducers({
    user: userReducer,
    feed: feedReducer,
    photoCard: photoCardReducer,
});

