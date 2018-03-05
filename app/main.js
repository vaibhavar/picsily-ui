/**
 * This is the main wrapper of the app
 * Main Route wrapper is instantiated here
 * It encloses <App/>  component
 */

import React from 'react';
import ReactDOM from 'react-dom';

// Import the Router
import { BrowserRouter, browserHistory } from 'react-router-dom';
// Provider for app state
import { Provider } from 'react-redux';
// State store
import store from './core/store';

import App from './app';

class Wrapper extends React.Component {
	render() {
		console.log(browserHistory);
		return (
			<Provider store={store}>
				<BrowserRouter history={browserHistory}>
					<App />
				</BrowserRouter>
			</Provider>
		);
	}
}

ReactDOM.render(<Wrapper />, document.getElementById('content'));
