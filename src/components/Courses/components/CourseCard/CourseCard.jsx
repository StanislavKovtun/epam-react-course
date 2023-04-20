import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../../common/Button/Button';
import pipeDuration from '../../../../helpers/pipeDuration';
import useGetAuthors from '../../../../helpers/authorsGetter';
import dateFormater from '../../../../helpers/dateFormatter';
//import { deleteCourseAC } from '../../../../store/courses/actionCreators';
import { deleteCourseAC } from '../../../../store/courses/thunk';
import { getUserRole } from './../../../../store/selectors';
import { roles } from './../../../../constants';

import styles from './CourseCard.module.css';

function CourseCard(props) {
	const { id, title, description, creationDate, duration, authors } = props;
	const courseAuthors = useGetAuthors(authors).join(', ');
	const dispatch = useDispatch();
	const role = useSelector(getUserRole);

	return (
		<div className={styles.card}>
			<div className={styles.cardLeft}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={styles.cardRight}>
				<p className={styles.authors}>
					<strong>Authors: </strong>
					{courseAuthors}
				</p>
				<p className={styles.duration}>
					<b>Duration: </b>
					{pipeDuration(duration)}
				</p>
				<p className={styles.created}>
					<strong>Created: </strong>
					{dateFormater(creationDate)}
				</p>
				<div className={styles.buttonBlock}>
					<Link to={`/courses/${id}`}>
						<Button className='cardButton' buttonText='Show course'></Button>
					</Link>
					{role === roles.admin ? (
						<>
							<div className='cardButtonUpdate'>
								<Button
									className='cardButton'
									buttonText='Edit course'
								></Button>
							</div>
							<div className='cardButtonDelete'>
								<Button
									className='cardButton'
									buttonText='Delete course'
									onClick={() => dispatch(deleteCourseAC(id))}
								></Button>
							</div>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
