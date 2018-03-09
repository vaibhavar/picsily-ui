/**
 * This is the <App /> component class that contains
 * all routes and header navigation
 */

import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './pages/home/';
import Profile from './pages/profile/';
import Header from './pages/common/Header';
import PictureUpload from './pages/common/PictureUpload';
import s from './pages/common/style.css';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.history.listen(() => {
			// view new URL
			console.log('New URL', this.props.history.location.pathname);
		});
	}

	onRouteChanged() {}

	render() {
		return (
			<div>
				<div className={s.appContainer}>
					<Header activeUrl={this.props.history.location.pathname} />
					<div className={`container ${s.routeContainer}`}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/profile" component={Profile} />
							<Route render={() => <h1>Not found</h1>} />
						</Switch>
					</div>
				</div>
				<PictureUpload />
			</div>
		);
	}
}

export default withRouter(App);
