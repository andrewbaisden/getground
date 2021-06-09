import { SET_ALERT } from '../actions/types';
import { SET_ALERT_SUCCESS } from '../actions/types';

const initialState = {
	data: [],
	loading: true,
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case SET_ALERT:
			return { ...state, loading: true };
		case SET_ALERT_SUCCESS:
			return { ...state, loading: false, data: payload };
		default:
			return state;
	}
}
