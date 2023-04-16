import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import dateFormater from '../../helpers/dateFormatter';
import pipeDuration from '../../helpers/pipeDuration';
import Button from '../../common/Button/Button';
import Author from '../CreateCourse/compopents/Author/Author';
//import { mockedCoursesList, mockedAuthorsList } from '../../constants';

import classes from './CourseInfo.module.css';

const CourseInfo = () => {
	const { id } = useParams();
	//const selectedCourse = mockedCoursesList.find((course) => course.id === id);
	const coursesList = useSelector((state) => state.coursesReducer); //##
	const selectedCourse = coursesList.find((course) => course.id === id);
	const authorsList = useSelector((state) => state.authorReducer);

	return (
		<div className={classes.courseInfoWrapper}>
			<Link to='/courses'>
				<Button buttonText='< Back to courses' />
			</Link>
			<h2 className={classes.title}>{selectedCourse.title}</h2>
			<div className={classes.courseInfo}>
				<div className={classes.leftBlock}>
					<p>{selectedCourse.description}</p>
				</div>
				<div className={classes.rightBlock}>
					<p>
						<strong>ID: </strong>
						{selectedCourse.id}
					</p>
					<p>
						<strong>Duration: </strong>
						{pipeDuration(selectedCourse.duration)} hours
					</p>
					<p>
						<strong>Created: </strong>
						{dateFormater(selectedCourse.creationDate)}
					</p>
					<p>
						<strong>Authors: </strong>
					</p>
					<ul>
						{selectedCourse.authors.map((authorId) => {
							//const foundAuthor = mockedAuthorsList.find(
							const foundAuthor = authorsList.find(
								(author) => author.id === authorId
							);
							return foundAuthor ? (
								<Author key={foundAuthor.id} author={foundAuthor} />
							) : null;
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
