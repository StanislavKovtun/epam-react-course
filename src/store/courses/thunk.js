import * as services from './../../services';
import { DELETE_COURSE, SAVE_COURSE, UPDATE_COURSE } from './actionTypes';

export const addCourseAC = (data) => async (dispatch) => {
	try {
		const response = await services.addCourseAPI(data);
		dispatch({
			type: SAVE_COURSE,
			payload: response,
		});
	} catch (error) {
		console.log(`Error adding course: ${error}`);
	}
};

export const updateCourseAC = (courseId, data) => async (dispatch) => {
	try {
		const response = await services.updateCourseAPI(courseId, data);
		dispatch({
			type: UPDATE_COURSE,
			payload: response,
		});
	} catch (error) {
		console.log(`Error updating course: ${error}`);
	}
};

export const deleteCourseAC = (courseId) => async (dispatch) => {
	try {
		const response = await services.deleteCourseAPI(courseId);
		if (response.successful) {
			dispatch({
				type: DELETE_COURSE,
				payload: courseId,
			});
		}
	} catch (error) {
		console.log(`Error deleting course: ${error}`);
	}
};
