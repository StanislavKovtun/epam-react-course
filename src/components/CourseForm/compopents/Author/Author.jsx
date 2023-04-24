import Button from '../../../../common/Button/Button';

import styles from './Author.module.css';

function Author({ author, onclickHandler, buttonText }) {
	let { name, id } = author;
	return (
		<li key={id} className={styles.authorItem}>
			<p>{name}</p>
			{buttonText ? (
				<Button
					buttonText={buttonText}
					onClick={() => onclickHandler(author)}
				/>
			) : null}
		</li>
	);
}

export default Author;
