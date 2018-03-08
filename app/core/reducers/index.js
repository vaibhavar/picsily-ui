/**
 * This file clubs all reducers into one big object
 */
import { combineReducers } from 'redux';

import user from './user/reducer-user';
import photos from './photos/reducer-photos';

const allReducers = combineReducers({
	user,
	photos,
});

export default allReducers;
