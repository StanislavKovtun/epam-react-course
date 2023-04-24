import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Author from './compopents/Author/Author';
import { addAuthorAC } from '../../store/authors/thunk';
import { addCourseAC, updateCourseAC } from '../../store/courses/thunk';
import pipeDuration from '../../helpers/pipeDuration';
import dateGenerator from '../../helpers/dateGenerator';
import * as selectors from '../../store/selectors';

import styles from './CourseForm.module.css';

function CourseForm() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const authorsListStore = useSelector(selectors.getAuthors);
	const coursesListStore = useSelector(selectors.getCourses);

	const [authorsList, setAuthorsList] = useState(authorsListStore);
	const [selectedAuthorsList, setSelectedAuthorsList] = useState([]);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [newAuthor, setNewAuthor] = useState('');
	const [duration, setDuration] = useState('');

	const createUpdateButtonName = id ? 'Update Course' : 'Create Course';

	useEffect(() => {
		if (id) {
			const currentCourse = coursesListStore.find((course) => course.id === id);
			if (currentCourse) {
				const { title, description, duration, authors } = currentCourse;
				setTitle(title);
				setDescription(description);
				setDuration(duration);
				setSelectedAuthorsList(
					authorsListStore.filter((author) => authors.includes(author.id))
				);
				setAuthorsList(
					authorsListStore.filter((author) => !authors.includes(author.id))
				);
			} else {
				window.alert('Invalid course ID!');
			}
		}
	}, [id, coursesListStore, authorsListStore]);

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
			name: author,
		};

		dispatch(addAuthorAC(newAuthor));
		setAuthorsList([...authorsList, newAuthor]);
		setNewAuthor('');
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

	async function createCourseSubmitHandler() {
		if (!isValid()) {
			alert('Please, fill in all fields');
		} else {
			const newCourse = {
				title: title,
				description: description,
				duration: +duration,
				authors: selectedAuthorsList.map((course) => course.id),
			};
			if (id) {
				dispatch(updateCourseAC(id, newCourse));
			} else {
				dispatch(addCourseAC({ ...newCourse, creationDate: dateGenerator() }));
			}
			navigate('/courses');
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
					buttonText={createUpdateButtonName}
				/>
			</div>
			<div className={styles.createDescriptionBlock}>
				<label htmlFor='createDescr'>Description</label>
				<textarea
					id='descrition'
					value={description}
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

export default CourseForm;
