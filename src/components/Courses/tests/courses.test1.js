import { BrowserRouter, Route, Routes, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

import Courses from './../Courses';
import CourseForm from './../../CourseForm/CourseForm';
import * as services from './../../../services';

describe('Courses', () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Admin',
			role: 'admin',
		},
		courses: [
			{
				id: '1k',
				title: 'Title',
				description: 'Description',
				creationDate: '29/03/2023',
				duration: 120,
				authors: [
					'df32994e-b23d-497c-9e4d-84e4dc02882f',
					'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
				],
			},
			{
				id: '2t',
				title: 'JavaScript',
				description: 'JavaScript',
				creationDate: '29/03/2023',
				duration: 120,
				authors: [
					'df32994e-b23d-497c-9e4d-84e4dc02882f',
					'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
				],
			},
		],
		authors: [
			{
				id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
				name: 'Stanislav',
			},
			{
				id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
				name: 'Anna Kim',
			},
		],
	};
	const mockedStore = {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};

	it('should display amount of CourseCard equal length of courses array.', async () => {
		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Courses />
				</BrowserRouter>
			</Provider>
		);

		const courseCards = screen.getAllByTestId('courseCard');
		expect(courseCards.length).toEqual(mockedState.courses.length);
	});
	//it('should display Empty container if courses array length is 0', async () => {
	//	const emptyCoursesState = {
	//		...mockedState,
	//		courses: [],
	//	};
	//	const storeWithEmptyCourses = {
	//		getState: () => emptyCoursesState,
	//		subscribe: jest.fn(),
	//		dispatch: jest.fn(),
	//	};
	//	jest
	//		.spyOn(services, 'courses')
	//		.mockResolvedValue(emptyCoursesState.courses);

	//	render(
	//		<Provider store={storeWithEmptyCourses}>
	//			<BrowserRouter>
	//				<Courses />
	//			</BrowserRouter>
	//		</Provider>
	//	);
	//	const courses = await services.courses();
	//	expect(courses).toEqual([]);
	//	const emptyCards = screen.getByTestId('emptyContainer');
	//	expect(emptyCards).toBeInTheDocument();
	//	jest.clearAllMocks();
	//});
	//it('should show CourseForm after a click on a button `Add new course`', () => {
	//	render(
	//		<Provider store={mockedStore}>
	//			<MemoryRouter initialEntries={[`/courses`]}>
	//				<Routes>
	//					<Route path='/courses' element={<Courses />} />
	//					<Route path='/courses/add' element={<CourseForm />} />
	//				</Routes>
	//			</MemoryRouter>
	//		</Provider>
	//	);
	//	if (mockedState.user.role === 'admin') {
	//		const addCourseButton = screen.queryByTestId('addButton');
	//		expect(addCourseButton).toBeInTheDocument();
	//		fireEvent.click(addCourseButton);
	//		const courseForm = screen.getByTestId('courseForm');
	//		expect(courseForm).toBeInTheDocument();
	//	}
	//});
});
