import Button from '../../../../common/Button/Button';
import styles from './Author.module.css';

function Author({ author, onclickHandler, buttonText }) {
	let { name, id } = author;
	return (
		<div key={id} className={styles.authorItem}>
			<p>{name}</p>
			<Button buttonText={buttonText} onClick={() => onclickHandler(author)} />
		</div>
	);
}

export default Author;
