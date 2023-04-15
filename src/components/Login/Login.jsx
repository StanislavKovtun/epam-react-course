import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { loginUserAPI } from '../../services';
import { loginAC, logoutAC } from '../../store/user/actionCreators';

import classes from './Login.module.css';

const Login = ({ setUserName }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');

	function isValidUserData() {
		if (userEmail && userPassword) {
			return true;
		} else return false;
	}

	async function loginOnSubmitHandler(e) {
		e.preventDefault();
		if (!isValidUserData()) {
			alert('All fields must be filled!');
		} else {
			const user = {
				email: userEmail,
				password: userPassword,
			};

			const resultToken = await loginUserAPI(user); //##

			if (resultToken.successful) {
				//console.log(resultToken);
				//console.log(JSON.stringify(resultToken));
				localStorage.setItem('token', JSON.stringify(resultToken));
				setUserName(resultToken.user.name); //##
				const tokenToStore = {
					token: resultToken?.result,
					name: resultToken?.user?.name,
					email: resultToken?.user?.email,
				};
				dispatch(loginAC(tokenToStore));
				navigate('/courses');
			} else {
				setUserName(resultToken.user.name); //##
				dispatch(logoutAC);
			}
		}
	}

	return (
		<div className={classes.formWrapper}>
			<form className={classes.loginForm} onSubmit={loginOnSubmitHandler}>
				<h3>Login</h3>
				<div className={classes.inputBlock}>
					<Input
						name='loginUserEmail'
						labelText='Email'
						type='email'
						value={userEmail}
						placeholderText='Enter email...'
						onChange={(e) => setUserEmail(e.target.value)}
					/>
				</div>
				<div className={classes.inputBlock}>
					<Input
						name='loginUserPass'
						labelText='Password'
						type='password'
						value={userPassword}
						placeholderText='Enter password...'
						onChange={(e) => setUserPassword(e.target.value)}
					/>
				</div>

				<Button type='submit' buttonText='Login' />
				<h4>
					<span>If you not have an account you can </span>
					<Link to='/registration'>Registration</Link>
				</h4>
			</form>
		</div>
	);
};

export default Login;
