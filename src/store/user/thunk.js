import * as actions from './actionTypes';
import * as services from './../../services';

export const getCurrentUserAC = (token) => async (dispatch) => {
	try {
		const response = await services.getCurrentUserAPI(token);
		dispatch({
			type: actions.GET_CURRENT_USER,
			payload: response.result,
		});
	} catch (error) {
		console.error('Error getting current user:', error);
	}
};
