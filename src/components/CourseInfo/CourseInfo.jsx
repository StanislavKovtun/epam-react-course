import { Link, useParams } from 'react-router-dom';

import dateFormater from '../../helpers/dateFormatter';
import pipeDuration from '../../helpers/pipeDuration';
import Button from '../../common/Button/Button';
import Author from '../CreateCourse/compopents/Author/Author';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';

import classes from './CourseInfo.module.css';

const CourseInfo = () => {
	const { id } = useParams();
	const selectedCourse = mockedCoursesList.find((course) => course.id === id);
	//console.log(id);
	//console.log(selectedCourse);
	//console.log(selectedCourse.creationDate);

	return (
		<div className={classes.courseInfoWrapper}>
			<Link to='/courses'>
				<Button buttonText='< Back to courses' />
			</Link>
			<h2>{selectedCourse.title}</h2>
			<div className='courseInfo'>
				<div className='leftBlock'>
					<p>{selectedCourse.description}</p>
				</div>
				<div className='rightBlock'>
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
					{/*<ul>
						{selectedCourse.authors.map((authorId) => {
							console.log('authorId:');
							console.log(authorId);
							const foundAuthor = mockedAuthorsList.find(
								(author) => author.id === authorId
							);

							console.log('mockedAuthorsList:');
							console.log(mockedAuthorsList);
							//console.log('selectedCourse.authors:');
							//console.log(selectedCourse.authors);
							console.log(foundAuthor);
							//return foundAuthor ? <Author>{foundAuthor}</Author> : null;
						})}
					</ul>*/}
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
