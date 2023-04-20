import { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';

//import { mockedCoursesList } from '../../constants';
import { BUTTON_TEXT_ADD_COURSE } from '../../constants';
import { getCoursesAC } from '../../store/courses/actionCreators'; //##
//import { getAuthorsAC } from '../../store/authors/actionCreators'; //##
import { getCoursesAPI } from '../../services'; //##
import * as selectors from '../../store/selectors';
import { getCurrentUserAC } from '../../store/user/thunk';

import styles from './Courses.module.css';

function Courses() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const coursesList = useSelector(selectors.getCourses); //##
	//const authorsList = useSelector((state) => state.authorReducer.authors); //##
	console.log(coursesList);

	const createCourseButtonHandler = () => {
		navigate('/courses/add');
	};

	const [search, setSearch] = useState('');

	//## add try/catch
	useEffect(() => {
		if (coursesList.length === 0) {
			getCoursesAPI().then((data) => dispatch(getCoursesAC(data.result)));
		}
		const token = localStorage.getItem('token');
		if (token) {
			dispatch(getCurrentUserAC(token));
			console.log('getCurrentUserAC');
		}
	}, [coursesList.length, dispatch]); //##

	//const filteredCourseList = mockedCoursesList.filter(
	const filteredCourseList = coursesList.filter(
		(course) =>
			course.title.toLowerCase().includes(search.toLowerCase()) ||
			course.id.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<Fragment>
			<div className={styles.panel}>
				<SearchBar searchMessage={setSearch} />
				<Button
					buttonText={BUTTON_TEXT_ADD_COURSE}
					onClick={createCourseButtonHandler}
				/>
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
