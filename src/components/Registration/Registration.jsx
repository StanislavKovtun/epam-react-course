import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import classes from './Registration.module.css';

const Registration = () => {
	const navigate = useNavigate();

	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');

	function isValidUserData() {
		if (userName && userEmail && userPassword) {
			return true;
		} else return false;
	}

	async function registrationOnSubmitHandler(e) {
		e.preventDefault();
		if (!isValidUserData()) {
			alert('All fields must be filled!');
		} else {
			const newUser = {
				name: userName,
				email: userEmail,
				password: userPassword,
			};

			const response = await fetch('http://localhost:4000/register', {
				method: 'POST',
				body: JSON.stringify(newUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			console.log(newUser);
			const result = await response.json();
			console.log(result);
			console.log(result.successful);
			if (result.successful) {
				navigate('/login');
			}
		}
	}

	return (
		<div className={classes.formWrapper}>
			<form
				className={classes.registrationForm}
				onSubmit={registrationOnSubmitHandler}
			>
				<h3>Registration</h3>
				<div className={classes.inputBlock}>
					<Input
						name='registrationUserName'
						labelText='Name'
						type='text'
						value={userName}
						placeholderText='Enter name...'
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
				<div className={classes.inputBlock}>
					<Input
						name='registrationUserEmail'
						labelText='Email'
						type='email'
						value={userEmail}
						placeholderText='Enter email...'
						onChange={(e) => setUserEmail(e.target.value)}
					/>
				</div>
				<div className={classes.inputBlock}>
					<Input
						name='registrationUserPass'
						labelText='Password'
						type='password'
						value={userPassword}
						placeholderText='Enter password...'
						onChange={(e) => setUserPassword(e.target.value)}
					/>
				</div>

				<Button type='submit' buttonText='Registration' />
				<h4>
					<span>If you have an account you can </span>
					<Link to='/login'>Login</Link>
				</h4>
			</form>
		</div>
	);
};

export default Registration;
