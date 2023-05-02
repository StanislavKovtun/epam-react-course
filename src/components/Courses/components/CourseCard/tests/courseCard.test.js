import CourseCard from '../CourseCard';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom/extend-expect';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Admin',
		role: 'admin',
	},
	courses: [
		{
			id: '1',
			title: 'Title',
			description: 'Description',
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

describe('CourseCard', () => {
	beforeEach(() => {
		const props = {
			...mockedState.courses[0],
			courseAuthors: mockedState.courses[0].authors
				.map(
					(authorId) =>
						mockedState.authors.find((author) => author.id === authorId)?.name
				)
				.toString()
				.split(',')
				.join(', '),
		};
		delete props.authors;
		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard {...props} />
				</BrowserRouter>
			</Provider>
		);
	});
	test('should display title', () => {
		const title = screen.queryByText('Title');
		expect(title).toBeInTheDocument();
	});
	test('should display description', () => {
		const description = screen.queryByText('Description');
		expect(description).toBeInTheDocument();
	});
	test('should display duration in the correct format', () => {
		const duration = screen.getByText('02:00');
		expect(duration).toBeInTheDocument();
	});
	//test('should display authors list', () => {
	//	const authors = screen.queryByText(/Anna Kim/);
	//	expect(authors).toBeInTheDocument();
	//});
	test('should display created date in the correct format', () => {
		const date = screen.queryByText('29.03.2023');
		expect(date).toBeInTheDocument();
	});
});
