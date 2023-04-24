import { GET_COURSES, SAVE_COURSE } from '../courses/actionTypes';
import coursesReducer from '../courses/reducer';

describe('coursesReducer', () => {
	test('should return the initial state', () => {
		expect(coursesReducer(undefined, { type: undefined })).toEqual([]);
	});
	test('should handle SAVE_COURSE and returns new state', () => {
		const newCourse = {
			id: '1',
			title: 'Title',
			description: 'Description',
			creationDate: '29/03/2023',
			duration: 120,
			authors: [
				'df32994e-b23d-497c-9e4d-84e4dc02882f',
				'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
			],
		};
		const initialState = [
			{
				id: '2',
				title: 'Title2',
				description: 'Description2',
				creationDate: '29/03/2023',
				duration: 123,
				authors: ['df32994e-b23d-497c-9e4d-84e4dc02882f'],
			},
		];
		expect(
			coursesReducer(initialState, { type: SAVE_COURSE, payload: newCourse })
		).toEqual([...initialState, newCourse]);
	});
	test('should handle GET_COURSES and returns new state', () => {
		const courses = [
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
			{
				id: '2',
				title: 'Title2',
				description: 'Description2',
				creationDate: '29/03/2023',
				duration: 123,
				authors: ['df32994e-b23d-497c-9e4d-84e4dc02882f'],
			},
		];
		expect(
			coursesReducer(undefined, { type: GET_COURSES, payload: courses })
		).toEqual(courses);
	});
});
