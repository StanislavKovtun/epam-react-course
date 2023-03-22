import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/' element={<Courses />} />
					<Route path='/newcourse' element={<CreateCourse />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
