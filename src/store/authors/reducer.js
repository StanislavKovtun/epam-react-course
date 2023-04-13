// Code with reducer for courses

//##
const authorsInitialState = {
	authors: [],
};

const authorReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case 'GET_AUTHORS':
			return {
				...state,
				authors: action.payload,
			};
		case 'CREATE_AUTHORS':
			return {
				...state,
				authors: [...state.authors, action.payload],
			};
		default:
			return state;
	}
};

export default authorReducer;
