import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/root-reducer';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

//TODO make code above:
// export const store = createStore(rootReducer, applyMiddleware(thunk));
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));