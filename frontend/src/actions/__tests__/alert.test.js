import { SET_ALERT } from '../types';
import { setAlert } from '../alert';

describe('SET_ALERT variable type is used correctly', () => {
	test('It returns the right string text', () => {
		const setAlertString = 'SET_ALERT';

		expect(SET_ALERT).toMatch(setAlertString);
	});
});
