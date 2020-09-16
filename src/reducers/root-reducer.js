import { combineReducers } from 'redux';
import { globalReducer } from './global';
import { feedReducer } from './feed';
import { bigPhotoReducer } from './big-photo';
import { userReducer } from './user';

export const rootReducer = combineReducers({
    global: globalReducer,
    user: userReducer,
    feed: feedReducer,
    bigPhoto: bigPhotoReducer,
});

