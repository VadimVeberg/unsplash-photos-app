import { combineReducers } from 'redux';
import {feedReducer} from './feed';
import { bigPhotoReducer } from './big-photo';
import { userReducer } from './user';

export const rootReducer = combineReducers({
    user: userReducer,
    feed: feedReducer,
    bigPhoto: bigPhotoReducer,
});

