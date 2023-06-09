import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import { BUTTON_TEXT_LOGOUT } from '../../constants.js';

import styles from './Header.module.css';

const USER_NAME = 'Stanislav'; //## temp?

function Header() {
	return (
		<div className={styles.header}>
			<Logo />
			<div className={styles.userBlock}>
				<h2 className={styles.user}>{USER_NAME}</h2>
				<Button
					buttonText={BUTTON_TEXT_LOGOUT}
					buttonOnClick={() => console.log('click')} //##
				/>
			</div>
		</div>
	);
}

export default Header;
