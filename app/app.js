/**
 * This is the <App /> component class that contains
 * all routes and header navigation
 */

import React from 'react';
import { connect } from 'react-redux';

import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './pages/home/';
import Profile from './pages/profile/';
import Header from './pages/common/Header';
import PictureUpload from './pages/common/PictureUpload';
import s from './pages/common/style.css';
import { getLoggedInUser } from './core/actions/user';

function mapStateToProps(state) {
	return { user: state.user };
}

function mapDispatchToProps(dispatch) {
	return {
		getLoggedInUser: () => {
			dispatch(getLoggedInUser());
		},
	};
}

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.history.listen(() => {
			// view new URL
			console.log('New URL', this.props.history.location.pathname);
		});

		if (!this.appInit) {
			// First time app init, check logged in user
			this.props.getLoggedInUser();
			this.appInit = true;
		}
	}

	onRouteChanged() {}

	render() {
		return (
			<div>
				<div className={s.appContainer}>
					<Header
						activeUrl={this.props.history.location.pathname}
						loggedIn={this.props.user.loggedIn}
					/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
