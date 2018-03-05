/**
 * This file clubs all reducers into one big object
 */
import { combineReducers } from 'redux';

import user from './user/reducer-user';

const allReducers = combineReducers({
	user,
});

export default allReducers;
