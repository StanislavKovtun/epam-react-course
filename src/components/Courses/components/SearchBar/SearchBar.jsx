import { useState } from 'react';

import { BUTTON_TEXT_SEARCH } from '../../../../constants';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import styles from './SearchBar.module.css';

function SearchBar({ searchMessage }) {
	const [search, setSearch] = useState('');

	const searchClicked = () => {
		searchMessage(search);
		// console.log(search);
	};

	const searchTextChanged = (e) => {
		setSearch(e.target.value);
		!e.target.value && searchMessage('');
		// console.log(search);
	};

	return (
		<div className={styles.searchBar}>
			<Input
				name='searchBar'
				value={search}
				onChange={searchTextChanged}
				placeholderText='Enter course name...'
			/>
			<Button onClick={searchClicked} buttonText={BUTTON_TEXT_SEARCH} />
		</div>
	);
}

export default SearchBar;
