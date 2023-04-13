// Code with reducer for user

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case 'LOGIN_USER':
			return {
				...state,
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
			};
		case 'LOGOUT_USER':
			return {
				...state,
				isAuth: false,
				name: '',
				email: '',
				token: '',
			};
		default:
			return state;
	}
};

export default userReducer;
