import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Courses from './components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { PrivateRoute } from './components/PrivateRouter/PrivateRouter';
import { ProtectedRouter } from './components/ProtectedRouter/ProtectedRouter';

import './App.css';

function App() {
	const token = localStorage.getItem('token');

	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route path='/*' element={<Navigate to='/' />} />
					<Route element={<ProtectedRouter isAuth={token} />}>
						<Route path='/' element={<Courses />} />
						<Route path='/courses' element={<Courses />} />
						<Route path='/courses/:id' element={<CourseInfo />} />
					</Route>
					<Route element={<PrivateRoute />}>
						<Route element={<ProtectedRouter isAuth={token} />}>
							<Route exact path='/courses/add' element={<CourseForm />} />
							<Route path='/courses/update/:id' element={<CourseForm />} />
						</Route>
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
