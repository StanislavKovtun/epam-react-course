import { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import { BUTTON_TEXT_ADD_COURSE } from '../../constants';
import { getCoursesAC } from '../../store/courses/thunk';
import * as selectors from '../../store/selectors';
import { getCurrentUserAC } from '../../store/user/thunk';

import styles from './Courses.module.css';

function Courses() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const role = useSelector(selectors.getUserRole);
	const coursesList = useSelector(selectors.getCourses);

	const [search, setSearch] = useState('');

	const createCourseButtonHandler = () => {
		navigate('/courses/add');
	};

	useEffect(() => {
		if (coursesList.length === 0) {
			dispatch(getCoursesAC());
		}
		const token = localStorage.getItem('token');
		if (token) {
			dispatch(getCurrentUserAC(token));
		}
	}, [dispatch, coursesList.length]);

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
