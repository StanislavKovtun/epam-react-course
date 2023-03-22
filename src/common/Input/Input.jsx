import { Fragment } from 'react';

import './Input.module.css';

const Input = (props) => {
	const { placeholderText = '', onChange, labelText = '', value } = props;

	return (
		<Fragment>
			<input
				id='searchBarInput'
				type='text'
				value={value}
				placeholder={placeholderText}
				onChange={onChange}
			/>
			{labelText && <label htmlFor='searchBarInput'>{labelText}</label>}
		</Fragment>
	);
};

export default Input;
