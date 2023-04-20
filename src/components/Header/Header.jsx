import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import { BUTTON_TEXT_LOGOUT } from '../../constants.js';
import { logoutAC } from '../../store/user/actionCreators';
import { getUserName } from '../../store/selectors';
import { logoutUserAPI } from '../../services';

import styles from './Header.module.css';

//function Header({ userName, setUserName }) {
function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userName = useSelector(getUserName);
	const token = localStorage.getItem('token');

	function onLogoutHandler() {
		//localStorage.removeItem('token');
		//dispatch(logoutAC());
		//navigate('/login');
		return async () => {
			await logoutUserAPI(token.toString());
			dispatch(logoutAC());
			navigate('/login');
		};
	}

	return (
		<div className={styles.header}>
			<Logo />
			<div className={styles.userBlock}>
				<h2 className={styles.user}>{userName || 'User is undefined'}</h2>
				{userName && (
					<Button buttonText={BUTTON_TEXT_LOGOUT} onClick={onLogoutHandler} />
				)}
			</div>
		</div>
	);
}

export default Header;
