// Code with actions

export const getCoursesAC = (course) => {
	return {
		type: 'GET_COURSES', //##
		payload: course,
	};
};

export const createCoursesAC = (course) => {
	return {
		type: 'CREATE_COURSES', //##
		payload: course,
	};
};

export const deleteCoursesAC = (course) => {
	return {
		type: 'DELETE_COURSES', //##
		payload: course,
	};
};
