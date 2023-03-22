import { Fragment } from 'react';

import './Input.module.css';

const Input = (props) => {
	const {
		placeholderText = '',
		onChange,
		labelText = '',
		value,
		name,
		type,
	} = props;

	return (
		<Fragment>
			{labelText && <label htmlFor={name}>{labelText}</label>}
			<input
				id={name}
				type={type}
				value={value}
				placeholder={placeholderText}
				onChange={onChange}
			/>
		</Fragment>
	);
};

export default Input;
