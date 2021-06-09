import { SET_ALERT, SET_ALERT_SUCCESS } from './types';
import axios from 'axios';

export const setAlert = () => (dispatch) => {
	const fetchBooks = async () => {
		dispatch({
			type: SET_ALERT,
			loading: true,
		});

		let requestOptions = {
			method: 'POST',
			redirect: 'follow',
		};

		const response = await axios.post(
			'http://nyx.vima.ekt.gr:3000/api/books?page=1&itemsPerPage=20&filters=Empty array []',
			requestOptions
		);

		try {
			console.log(response.data);
			const data = response.data;

			dispatch({
				type: SET_ALERT_SUCCESS,
				loading: false,
				payload: { data },
			});
		} catch (error) {
			console.log(error);
		}
	};

	fetchBooks();
};
