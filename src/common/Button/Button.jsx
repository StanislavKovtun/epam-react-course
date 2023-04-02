import React from 'react';

import styles from './Button.module.css';

function Button({ buttonText, onClick, type }) {
	return (
		<button type={type} className={styles.button} onClick={onClick}>
			{buttonText}
		</button>
	);
}

export default Button;
