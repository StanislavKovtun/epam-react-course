// Code with actions

//## move to constants?!

export const getAuthorsAC = (author) => {
	return {
		type: 'GET_AUTHORS',
		payload: author,
	};
};

export const createAuthorsAC = (author) => {
	return {
		type: 'CREATE_AUTHORS',
		payload: author,
	};
};
