import * as actions from './actionTypes';

export const loginAC = ({ token, name, email }) => ({
	type: actions.LOGIN,
	payload: { token, name, email },
});

export const logoutAC = () => ({
	type: actions.LOGOUT,
});
