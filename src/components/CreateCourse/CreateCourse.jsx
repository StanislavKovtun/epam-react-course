import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
//import { mockedAuthorsList } from '../../constants';
//import { mockedCoursesList } from '../../constants';
import { createAuthorsAC } from '../../store/authors/actionCreators';
import { createCoursesAC } from '../../store/courses/actionCreators';
import pipeDuration from '../../helpers/pipeDuration';
import dateGenerator from '../../helpers/dateGenerator';

import styles from './CreateCourse.module.css';
import Author from './compopents/Author/Author';

function CreateCourse() {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const authorsFromStore = useSelector((state) => state.authorReducer.authors);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [newAuthor, setNewAuthor] = useState('');
	const [duration, setDuration] = useState('');
	//const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [authorsList, setAuthorsList] = useState(authorsFromStore);
	const [selectedAuthorsList, setSelectedAuthorsList] = useState([]);

	function addCourseAuthor(author) {
		setSelectedAuthorsList([...selectedAuthorsList, author]);
		setAuthorsList((current) =>
			current.filter((item) => item.name !== author.name)
		);
	}

	function deleteCourseAuthor(author) {
		setAuthorsList([...authorsList, author]);
		setSelectedAuthorsList((current) =>
			current.filter((item) => item.name !== author.name)
		);
	}

	function createNewAuthor(author) {
		if (author.length < 2) {
			return;
		}
		const newAuthor = {
			id: uuidv4(),
			name: author,
		};
		setAuthorsList([...authorsList, newAuthor]);
		//mockedAuthorsList.push(newAuthor); //##
		dispatch(createAuthorsAC(newAuthor));
	}

	function isValid() {
		if (
			!title ||
			!description ||
			duration <= 0 ||
			!selectedAuthorsList.length
		) {
			return false;
		} else return true;
	}

	function createCourseSubmitHandler() {
		if (!isValid()) {
			alert('Please, fill in all fields');
		} else {
			const newCourse = {
				id: uuidv4(),
				title: title,
				description: description,
				creationDate: dateGenerator(),
				duration: duration,
				authors: selectedAuthorsList.map((course) => course.id),
			};
			//mockedCoursesList.push(newCourse);
			dispatch(createCoursesAC(newCourse));
			navigate('/');
		}
	}

	return (
		<section className={styles.createCourseWrapper}>
			<div className={styles.titleBlock}>
				<div className={styles.inputTitle}>
					<Input
						name='inputTitle'
						labelText='Title'
						type='text'
						value={title}
						placeholderText='Enter title...'
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<Button
					onClick={createCourseSubmitHandler}
					buttonText='Create Course'
				/>
			</div>
			<div className={styles.createDescriptionBlock}>
				<label htmlFor='createDescr'>Description</label>
				<textarea
					name='createDescr'
					type='text'
					placeholder='Enter description'
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div className={styles.createAuthorBlock}>
				<div className={styles.leftBlock}>
					<div className={styles.addAuthor}>
						<h3>Add author</h3>
						<Input
							name='addAuthorName'
							labelText='Author name'
							type='text'
							value={newAuthor}
							placeholderText='Enter author name ...'
							onChange={(e) => setNewAuthor(e.target.value)}
						/>
						<Button
							buttonText='Create author'
							onClick={() => createNewAuthor(newAuthor)}
						/>
					</div>
					<div className={styles.addDuration}>
						<h3>Duration</h3>
						<Input
							name='addDuration'
							labelText='Duration'
							type='number'
							value={duration}
							placeholderText='Enter duration in minutes ...'
							onChange={(e) => setDuration(e.target.value)}
						/>
						<h2>Duration: {pipeDuration(duration)} hours</h2>
					</div>
				</div>
				<div className={styles.rightBlock}>
					<div className={styles.allAuthorsList}>
						<h3>Authors</h3>
						<ul>
							{authorsList.map((author) => (
								<Author
									key={author.id}
									author={author}
									buttonText='Add author'
									onclickHandler={addCourseAuthor}
								></Author>
							))}
						</ul>
					</div>
					<div className={styles.chosenAuthorsList}>
						<h3>Course authors</h3>
						{!selectedAuthorsList.length ? (
							<h4>Author list is empty</h4>
						) : (
							<ul>
								{selectedAuthorsList.map((author) => (
									<Author
										key={author.id}
										author={author}
										buttonText='Delete author'
										onclickHandler={deleteCourseAuthor}
									></Author>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default CreateCourse;
