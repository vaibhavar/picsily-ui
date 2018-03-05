/**
 * App's store file
 * This will initialize the global app state
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

import allReducers from './reducers/index';

let middleWare;
const oLogger = createLogger();

if (process.env.NODE_ENV === 'development') {
	// We need to log state in development environment
	middleWare = applyMiddleware(oLogger, thunk, promise());
} else {
	// No need to output logs in production
	middleWare = applyMiddleware(thunk, promise());
}

export default createStore(allReducers, {}, middleWare);
