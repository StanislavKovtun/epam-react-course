import logo from '../../../../assets/logo.jpg';
import styles from './Logo.module.css';

function Logo() {
	return <img className={styles['logo-img']} src={logo} alt='logo' />;
}

export default Logo;
