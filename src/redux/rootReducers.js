import { combineReducers } from 'redux';
import { PostReducers } from './Posts/reducers/PostReducers';

const rootReducers = combineReducers({
	PostReducers,
});

export default rootReducers;
