import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAuthorsAC } from '../store/authors/actionCreators';
import { getAuthorsAPI } from '../services';
import * as selectors from './../store/selectors';

export default function useGetAuthors(authorsIdArray = []) {
	const dispatch = useDispatch();
	const authorsList = useSelector(selectors.getAuthors);

	useEffect(() => {
		if (authorsList.length === 0) {
			getAuthorsAPI().then((data) => dispatch(getAuthorsAC(data.result)));
		}
	}, [authorsList.length, dispatch]);

	const authorsArray = [];

	authorsIdArray.forEach((authorId) =>
		authorsList.forEach((author) => {
			if (author.id === authorId) {
				authorsArray.push(author.name);
			}
		})
	);

	return authorsArray;
}
