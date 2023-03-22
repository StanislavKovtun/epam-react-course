import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { mockedAuthorsList } from '../../constants';
import { mockedCoursesList } from '../../constants';
import pipeDuration from '../../helpers/pipeDuration';
import dateGenerator from '../../helpers/dateGenerator';

import styles from './CreateCourse.module.css';

const CreateCourse = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [newAuthor, setNewAuthor] = useState('');
	const [duration, setDuration] = useState('');
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [selectedAuthorList, setSelectedAuthorList] = useState([]);

	const navigate = useNavigate();

	function addCourseAuthor(author) {
		setSelectedAuthorList([...selectedAuthorList, author]);
		setAuthorsList((current) =>
			current.filter((item) => item.name !== author.name)
		);
	}

	function deleteCourseAuthor(author) {
		setAuthorsList([...authorsList, author]);
		setSelectedAuthorList((current) =>
			current.filter((item) => item.name !== author.name)
		);
	}

	function renderAuthorsList(authorsList) {
		const items = authorsList.map((author) => {
			let { name, id } = author;
			return (
				<div key={id} className={styles.authorItem}>
					<p>{name}</p>
					<Button
						buttonText='Add author'
						onClick={() => addCourseAuthor(author)}
					/>
				</div>
			);
		});
		return items;
	}

	function renderSelectedAuthorsList(authorsList) {
		const items = authorsList.map((author) => {
			let { name, id } = author;
			return (
				<div key={id} className={styles.authorItem}>
					<p>{name}</p>
					<Button
						buttonText='Delete author'
						onClick={() => deleteCourseAuthor(author)}
					/>
				</div>
			);
		});
		return items;
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
		mockedAuthorsList.push(newAuthor);
	}

	function validation() {
		if (!title || !description || duration <= 0 || !selectedAuthorList.length) {
			return false;
		} else return true;
	}

	function CreateCourse() {
		if (!validation()) {
			alert('Please, fill in all fields');
		} else {
			const newCourse = {
				id: uuidv4(),
				title: title,
				description: description,
				creationDate: dateGenerator(),
				duration: duration,
				authors: selectedAuthorList.map((course) => course.id),
			};
			mockedCoursesList.push(newCourse);
			navigate('/');
		}
	}

	const checkedSelectedAuthorList =
		selectedAuthorList.length === 0 ? (
			<h4>Author list is empty</h4>
		) : (
			renderSelectedAuthorsList(selectedAuthorList)
		);

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
				<Button onClick={CreateCourse} buttonText='Create Course' />
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
						<div>{renderAuthorsList(authorsList)}</div>
					</div>
					<div className={styles.chosenAuthorsList}>
						<h3>Course authors</h3>
						{checkedSelectedAuthorList}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CreateCourse;
