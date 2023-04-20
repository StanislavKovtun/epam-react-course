// Code with actions

import { GET_AUTHORS } from './actionTypes';

//export const addAuthorAC = (author) => ({
//	type: ADD_AUTHOR,
//	payload: author,
//});

export const getAuthorsAC = (authors) => ({
	type: GET_AUTHORS,
	payload: authors,
});

//export const attachAuthorAC = (authorId) => ({
//	type: ATTACH_AUTHOR,
//	payload: authorId,
//});

//export const detachAuthor = (authorId) => ({
//	type: DETACH_AUTHOR,
//	payload: authorId,
//});

//export const detachAuthors = () => ({
//	type: DETACH_AUTHORS,
//});
