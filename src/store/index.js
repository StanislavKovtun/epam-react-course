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

const rootReducer = combineReducers({
	user: userReducer,
	courses: coursesReducer,
	authors: authorReducer,
});

const store = legacy_createStore(
	rootReducer,
	compose(
		applyMiddleware(ReduxThunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
