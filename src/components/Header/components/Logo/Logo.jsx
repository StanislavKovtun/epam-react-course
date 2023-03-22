import logo from '../../../../assets/logo.jpg';
import styles from './Logo.module.css';

const Logo = () => <img className={styles['logo-img']} src={logo} alt='logo' />;

export default Logo;
