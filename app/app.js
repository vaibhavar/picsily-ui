/**
 * This is the <App /> component class that contains
 * all routes and header navigation
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/';
import Profile from './pages/profile/';
import Header from './pages/common/Header';

class App extends React.Component {
	render() {
		return (
			<span>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/profile" component={Profile} />
					<Route render={() => <h1>Not found</h1>} />
				</Switch>
			</span>
		);
	}
}

export default App;
