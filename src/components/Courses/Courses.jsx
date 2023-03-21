import { Fragment, useState } from 'react';
//import { useNavigate } from 'react-router-dom';

//import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';

import { mockedCoursesList } from '../../constants';
import { BUTTON_TEXT_ADD_COURSE } from '../../constants';

import styles from './Courses.module.css';

const Courses = () => {
	//const navigate = useNavigate();

	const createCourseButtonHandler = () => {
		//navigate('/courses/add');
	};

	const [courseList, setCourseList] = useState(mockedCoursesList);

	//const searchHandler = (text) => {
	//	const filteredCourses = mockedCoursesList.filter((course) => {
	//		if (
	//			course.title.toLocaleLowerCase().includes(text) ||
	//			course.id.toLocaleLowerCase().includes(text)
	//		) {
	//			return course;
	//		} else {
	//			return undefined;
	//		}
	//	});
	//	setCourseList(filteredCourses);
	//};

	return (
		<Fragment>
			<div className={styles.panel}>
				{/*<SearchBar search={searchHandler} />*/}
				<Button
					buttonText={BUTTON_TEXT_ADD_COURSE}
					onClick={createCourseButtonHandler}
				/>
			</div>
			{courseList.map((course) => (
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
