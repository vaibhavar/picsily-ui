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
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import App from './app';

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: '#E91E63',
		primary2Color: '#E91E63',
		primary3Color: '#E91E63',
		accent1Color: '#FF80AB',
	},
});

class Wrapper extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider muiTheme={muiTheme}>
					<BrowserRouter history={browserHistory}>
						<App />
					</BrowserRouter>
				</MuiThemeProvider>
			</Provider>
		);
	}
}

ReactDOM.render(<Wrapper />, document.getElementById('content'));
