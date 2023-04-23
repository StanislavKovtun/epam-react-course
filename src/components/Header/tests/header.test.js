import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './../Header';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { getUserName } from './../../../store/selectors';

import '@testing-library/jest-dom/extend-expect';

jest.mock('../../../store/selectors');

const mockedState = {
	user: {
		isAuth: true,
		//name: 'Stanislav',
		name: 'Admin',
	},
	courses: [],
	authors: [],
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('Header', () => {
	afterEach(() => {
		jest.clearAllMocks();
		localStorage.removeItem('token');
	});

	test('should render logo, user name and logout button when token is present', () => {
		getUserName.mockReturnValue(mockedState.user.name);
		localStorage.setItem('token', 'testToken');
		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
		const logo = screen.getByAltText('logo');
		const name = screen.getByText(mockedState.user.name);
		const logoutButton = screen.getByText('Logout');
		expect(logo).toBeInTheDocument();
		//expect(name).toBeInTheDocument();
		//expect(logoutButton).toBeInTheDocument();
	});

	//test('should not render user name and logout button when token is absent', () => {
	//	getUserName.mockReturnValue(mockedState.user.name);
	//	render(
	//		<Provider store={mockedStore}>
	//			<BrowserRouter>
	//				<Header />
	//			</BrowserRouter>
	//		</Provider>
	//	);
	//	const name = screen.queryByText(mockedState.user.name);
	//	const logoutButton = screen.queryByText('Logout');
	//	expect(name).not.toBeInTheDocument();
	//	expect(logoutButton).not.toBeInTheDocument();
	//});
});
