//import { React, Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
// Import the Router
import { BrowserRouter, browserHistory } from 'react-router-dom';

import App from './app';

class Wrapper extends React.Component {
	render() {
		console.log(browserHistory);
		return (
			<BrowserRouter history={browserHistory}>
				<App />
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<Wrapper />, document.getElementById('content'));
