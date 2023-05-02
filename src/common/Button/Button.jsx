import React from 'react';

import styles from './Button.module.css';

function Button({ buttonText, onClick, type, ...otherProps }) {
	return (
		<button
			type={type}
			className={styles.button}
			onClick={onClick}
			{...otherProps}
		>
			{buttonText}
		</button>
	);
}

export default Button;
