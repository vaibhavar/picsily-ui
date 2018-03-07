/**
 * This is the <App /> component class that contains
 * all routes and header navigation
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/';
import Profile from './pages/profile/';
import Header from './pages/common/Header';
import s from './pages/common/style.css';

class App extends React.Component {
	render() {
		return (
			<div className={s.appContainer}>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/profile" component={Profile} />
					<Route render={() => <h1>Not found</h1>} />
				</Switch>
			</div>
		);
	}
}

export default App;
