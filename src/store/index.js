// Add store creation, root reducer

import { createStore, combineReducers } from 'redux';
import userReducer from './user/reducer';
import authorReducer from './authors/reducer';
import coursesReducer from './courses/reducer';

const store = createStore(
	combineReducers({ userReducer, authorReducer, coursesReducer })
);

export default store;
