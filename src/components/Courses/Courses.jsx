import { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import { BUTTON_TEXT_ADD_COURSE } from '../../constants';
import { getCoursesAC } from '../../store/courses/actionCreators'; //##
//import { getAuthorsAC } from '../../store/authors/actionCreators'; //##
import { getCoursesAPI } from '../../services'; //##
//import { getAuthorsAPI } from '../../services';
import * as selectors from '../../store/selectors';
import { getCurrentUserAC } from '../../store/user/thunk';

import styles from './Courses.module.css';

function Courses() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const role = useSelector(selectors.getUserRole);
	const coursesList = useSelector(selectors.getCourses); //##
	//console.log(coursesList);

	const createCourseButtonHandler = () => {
		navigate('/courses/add');
	};

	const [search, setSearch] = useState('');

	// v1

	useEffect(() => {
		if (coursesList.length === 0) {
			getCoursesAPI().then((data) => dispatch(getCoursesAC(data.result)));
		}
		const token = localStorage.getItem('token');
		if (token) {
			dispatch(getCurrentUserAC(token));
		}
	}, [dispatch, coursesList.length]);

	// v2

	/////////////////////////////////////////////////////////
	//const [filteredCourseList, setFilteredCourseList] = useState(coursesList);
	//const authorsList = useSelector(selectors.getAuthors); //##

	//const fetchCourses = async () => {
	//	const response = await getCoursesAPI();
	//	return response;
	//};

	//const fetchAuthors = async () => {
	//	const response = await getAuthorsAPI();
	//	return response;
	//};

	//useEffect(() => {
	//	if (coursesList.length === 0) {
	//		fetchCourses().then((result) => dispatch(getCoursesAC(result)));
	//	}
	//	if (authorsList.length === 0) {
	//		fetchAuthors().then((result) => dispatch(getAuthorsAC(result)));
	//	}
	//}, [authorsList.length, coursesList.length, dispatch]);

	//useEffect(() => {
	//	setFilteredCourseList(
	//		search
	//			? coursesList.filter(
	//					(course) =>
	//						course.title.toLowerCase().includes(search.toLowerCase()) ||
	//						course.id.toLowerCase().includes(search.toLowerCase())
	//			  )
	//			: coursesList
	//	);
	//}, [search, coursesList]);

	/////////////////////////////////////////////////////////

	const filteredCourseList = search
		? coursesList.filter(
				(course) =>
					course.title.toLowerCase().includes(search.toLowerCase()) ||
					course.id.toLowerCase().includes(search.toLowerCase())
		  )
		: coursesList;

	return (
		<Fragment>
			<div className={styles.panel}>
				<SearchBar searchMessage={setSearch} />
				{role === 'admin' ? (
					<Button
						buttonText={BUTTON_TEXT_ADD_COURSE}
						onClick={createCourseButtonHandler}
					/>
				) : null}
			</div>
			{filteredCourseList.map(
				({ id, title, duration, creationDate, description, authors }) => (
					<CourseCard
						key={id}
						id={id}
						title={title}
						duration={duration}
						creationDate={creationDate}
						description={description}
						authors={authors}
					/>
				)
			)}
		</Fragment>
	);
}

export default Courses;
