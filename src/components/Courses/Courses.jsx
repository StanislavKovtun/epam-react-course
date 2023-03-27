import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';

import { mockedCoursesList } from '../../constants';
import { BUTTON_TEXT_ADD_COURSE } from '../../constants';

import styles from './Courses.module.css';

const Courses = () => {
	const navigate = useNavigate();

	const createCourseButtonHandler = () => {
		navigate('/newcourse');
	};

	const [search, setSearch] = useState('');

	const filteredCourseList = mockedCoursesList.filter(
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
};

export default Courses;
