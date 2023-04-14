import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import CourseInfo from './components/CourseInfo/CourseInfo';

import './App.css';

function App() {
	const [userName, setUserName] = useState(''); //## to store
	const token = localStorage.getItem('token');
	// console.log('token: ', token);

	useEffect(() => {
		if (token) {
			const tokenItem = JSON.parse(localStorage.getItem('token'));
			console.log('tokenItem: ', tokenItem);
			tokenItem && setUserName(tokenItem.user.name);
		}
	}, [token]);

	return (
		<BrowserRouter>
			<div className='App'>
				<Header userName={userName} setUserName={setUserName} />
				<Routes>
					<Route
						path='/'
						element={token ? <Courses /> : <Login setUserName={setUserName} />}
					/>
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login setUserName={setUserName} />} />
					<Route path='/courses' element={<Courses />} />
					<Route path='/courses/add' element={<CreateCourse />} />
					<Route path='/courses/:id' element={<CourseInfo />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
