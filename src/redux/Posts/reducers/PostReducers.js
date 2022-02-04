import * as actions from '../constants/PostConstants';

const initialState = {
	posts: [],
	loading: false,
	links: {}
};

export const PostReducers = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_POST_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actions.FETCH_POST_SUCCESS:
			return {
				...state,
				loading: false,
				posts: action.payload.data.data,
				links: action.payload.data.links,
			};
		case actions.FETCH_POST_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
