import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { loginAC } from './store/user/actionCreators';

import './App.css';

function App() {
	const [userName, setUserName] = useState('');
	const dispatch = useDispatch();
	const token = localStorage.getItem('token');

	useEffect(() => {
		if (token) {
			const tokenItem = JSON.parse(localStorage.getItem('token'));
			tokenItem && setUserName(tokenItem.user.name);
			const tokenToStore = {
				token: tokenItem?.result,
				name: tokenItem?.user?.name,
				email: tokenItem?.user?.email,
			};
			dispatch(loginAC(tokenToStore));
		}
	}, [token, dispatch]);

	return (
		<BrowserRouter>
			<div className='App'>
				<Header userName={userName} setUserName={setUserName} />
				<Routes>
					<Route
						path='/'
						element={token ? <Courses /> : <Navigate to='/login' />}
					/>
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login setUserName={setUserName} />} />
					<Route
						path='/courses'
						element={token ? <Courses /> : <Navigate to='/login' />}
					/>
					<Route
						path='/courses/add'
						element={token ? <CreateCourse /> : <Navigate to='/login' />}
					/>
					<Route
						path='/courses/:id'
						element={token ? <CourseInfo /> : <Navigate to='/login' />}
					/>
					<Route path='/*' element={<Navigate to='/' />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
