// Home
import React from 'react';
import { connect } from 'react-redux';

import Login from '../login';
import Dashboard from '../dashboard';

function mapStateToProps(state) {
	return { user: state.user };
}

function mapDispatchToProps(dispatch) {
	return {};
}

class Home extends React.Component {
	getContent() {
		return this.props.user ? <Dashboard /> : <Login />;
	}

	render() {
		return this.getContent();
	}
}

Home.defaultProps = {
	user: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
