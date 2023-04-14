// Add store creation, root reducer

import { combineReducers, legacy_createStore } from 'redux';
import userReducer from './user/reducer';
import authorReducer from './authors/reducer';
import coursesReducer from './courses/reducer';

const store = legacy_createStore(
	combineReducers({ userReducer, authorReducer, coursesReducer })
);

export default store;