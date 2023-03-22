import { Fragment, useState } from 'react';
//import { useNavigate } from 'react-router-dom';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';

import { mockedCoursesList } from '../../constants';
import { BUTTON_TEXT_ADD_COURSE } from '../../constants';

import styles from './Courses.module.css';

const Courses = () => {
	//const navigate = useNavigate(); //##

	const createCourseButtonHandler = () => {
		//navigate('/courses/add'); //##
		console.log('go to createCourse');
	};

	const [coursesList, setCoursesList] = useState(mockedCoursesList);

	const searchHandler = (text) => {
		if (!text) {
			return setCoursesList(mockedCoursesList);
		}

		const filteredCourseList = coursesList.filter(
			(course) =>
				course.title.toLowerCase().includes(text.toLowerCase()) ||
				course.id.toLowerCase().includes(text.toLowerCase())
		);
		setCoursesList(filteredCourseList);
	};

	return (
		<Fragment>
			<div className={styles.panel}>
				<SearchBar searchMessage={searchHandler} />
				<Button
					buttonText={BUTTON_TEXT_ADD_COURSE}
					onClick={createCourseButtonHandler}
				/>
			</div>
			{coursesList.map((course) => (
				<CourseCard
					key={course.id}
					id={course.id}
					title={course.title}
					duration={course.duration}
					creationDate={course.creationDate}
					description={course.description}
					authors={course.authors}
				/>
			))}
		</Fragment>
	);
};

export default Courses;
