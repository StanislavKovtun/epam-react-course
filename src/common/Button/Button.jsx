import React from 'react';

import styles from './Button.module.css';

const Button = ({ buttonText, buttonOnClick }) => (
	<button className={styles.button} onClick={buttonOnClick}>
		{buttonText}
	</button>
);

export default Button;
