import React from 'react';

import styles from './Button.module.css';

const Button = ({ buttonText, onClick }) => (
	<button className={styles.button} onClick={onClick}>
		{buttonText}
	</button>
);

export default Button;
