import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import { mockedAuthorsList } from '../constants';
import { getAuthorsAC } from '../store/authors/actionCreators';
import { getAuthorsAPI } from '../services';

export default function useGetAuthors(authorsIdArray) {
	const dispatch = useDispatch();
	const authorsList = useSelector((state) => state.authorReducer);

	useEffect(() => {
		if (authorsList.length === 0) {
			getAuthorsAPI().then((data) => dispatch(getAuthorsAC(data.result)));
		}
	}, [authorsList.length, dispatch]);

	const authorsArray = [];

	authorsIdArray.forEach((authorId) =>
		//mockedAuthorsList.forEach((author) => {
		authorsList.forEach((author) => {
			if (author.id === authorId) {
				authorsArray.push(author.name);
			}
		})
	);

	return authorsArray;
}
