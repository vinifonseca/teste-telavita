import * as actions from '../constants/PostConstants';
import axios from 'axios';

export const fetchPostsBySearch = (seach) => async (dispatch) => {
	dispatch({ type: actions.FETCH_POST_REQUEST });

	try {
		const data = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${seach}`);
		dispatch({ type: actions.FETCH_POST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: actions.FETCH_POST_FAILED, payload: error.message });
		alert(error.message);
	}
};

export const fetchPostsByUrl = (url) => async (dispatch) => {
	dispatch({ type: actions.FETCH_POST_REQUEST });
	try {
		const data = await axios.get(url);
		dispatch({ type: actions.FETCH_POST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: actions.FETCH_POST_FAILED, payload: error.message });
		alert(error.message);
	}
};