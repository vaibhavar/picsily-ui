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
// Needed for material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './app';

class Wrapper extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider>
					<BrowserRouter history={browserHistory}>
						<App />
					</BrowserRouter>
				</MuiThemeProvider>
			</Provider>
		);
	}
}

ReactDOM.render(<Wrapper />, document.getElementById('content'));
