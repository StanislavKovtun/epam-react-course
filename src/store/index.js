// Add store creation, root reducer

import {
	combineReducers,
	legacy_createStore,
	compose,
	applyMiddleware,
} from 'redux';
import ReduxThunk from 'redux-thunk';

import userReducer from './user/reducer';
import authorReducer from './authors/reducer';
import coursesReducer from './courses/reducer';

const store = legacy_createStore(
	combineReducers({ userReducer, authorReducer, coursesReducer }),
	compose(
		applyMiddleware(ReduxThunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
