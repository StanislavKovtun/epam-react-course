import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Courses from './components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { PrivateRoute } from './components/PrivateRouter/PrivateRouter';
//import { getCurrentUserAC } from './store/user/thunk';
//import { getUserIsAuth } from './store/selectors';

import './App.css';

function App() {
	//const dispatch = useDispatch();
	const token = localStorage.getItem('token');

	//useEffect(() => {
	//	if (token) {
	//		dispatch(getCurrentUserAC(token));
	//	}
	//}, [token, dispatch]);

	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Routes>
					<Route
						path='/'
						element={token ? <Courses /> : <Navigate to='/login' />}
					/>
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route
						path='/courses'
						element={token ? <Courses /> : <Navigate to='/login' />}
					/>
					<Route element={<PrivateRoute />}>
						<Route
							exact
							path='/courses/add'
							element={token ? <CourseForm /> : <Navigate to='/login' />}
						/>
						<Route
							path='/courses/update/:id'
							element={token ? <CourseForm /> : <Navigate to='/login' />}
						/>
					</Route>
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
