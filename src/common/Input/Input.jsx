import { Fragment } from 'react';

import './Input.module.css';

const Input = (props) => {
	const { placeholderText = '', onChange, labelText = '' } = props;

	return (
		<Fragment>
			<input
				id='searchBarInput'
				type='text'
				placeholder={placeholderText}
				onChange={onChange}
				labelText={labelText}
			/>
			{labelText && <label htmlFor='searchBarInput'>{labelText}</label>}
		</Fragment>
	);
};

export default Input;
