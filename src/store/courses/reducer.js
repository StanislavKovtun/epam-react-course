// Code with reducer for courses

const coursesInitialState = {
	courses: [],
};

const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case 'GET_COURSES':
			return {
				...state,
				courses: action.payload,
			};
		case 'CREATE_COURSES':
			return {
				...state,
				courses: [...state.courses, action.payload],
			};
		case 'DELETE_COURSES':
			return {
				...state,
				courses: state.courses.filter((item) => item.id !== action.payload),
			};
		default:
			return state;
	}
};

export default coursesReducer;
