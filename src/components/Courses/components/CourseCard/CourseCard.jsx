import Button from '../../../../common/Button/Button';
import pipeDuration from '../../../../helpers/pipeDuration';
import getAuthors from '../../../../helpers/authorsGetter';
import dateFormater from '../../../../helpers/dateFormatter';

import styles from './CourseCard.module.css';

const CourseCard = (props) => {
	const { title, description, creationDate, duration, authors } = props;
	const durationObject = pipeDuration(duration);

	//const creationFormated = creationDateFormater(creationDate);
	const courseAuthors = getAuthors(authors).join(', ');

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
					{`${durationObject.hours}:${durationObject.minutes} hours`}
				</p>
				<p className={styles.created}>
					<strong>Created: </strong>
					{dateFormater(creationDate)}
				</p>
				<div className={styles.buttonBlock}>
					<Button buttonText='Show course'></Button>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
