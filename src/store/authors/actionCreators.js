import { GET_AUTHORS } from './actionTypes';

export const getAuthorsAC = (authors) => ({
	type: GET_AUTHORS,
	payload: authors,
});
