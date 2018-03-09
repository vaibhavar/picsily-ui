// login
import React from 'react';
import { connect } from 'react-redux';

import s from './style.css';
import { FlatButton } from 'material-ui';
import { loginUser, registerUser } from '../../core/actions/user';

function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loginUser: (username, password) => {
			dispatch(loginUser(username, password));
		},
		registerUser: (firstName, lastName, username, password) => {
			dispatch(registerUser(firstName, lastName, username, password));
		},
	};
}

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			pass: '',
			firstName: '',
			lastName: '',
		};

		this.handleChangeOf = this.handleChangeOf.bind(this);
		this.loginUser = this.loginUser.bind(this);
		this.registerUser = this.registerUser.bind(this);
	}

	handleChangeOf(sKey, oEvent) {
		const sValue = oEvent.target.value;
		const sStateToSet = `{"${sKey}":"${sValue}"}`;
		this.setState(JSON.parse(sStateToSet));
	}

	loginUser(event) {
		event.preventDefault();
		var sUsername = this.state.user;
		var sPassword = this.state.pass;
		this.props.loginUser(sUsername, sPassword);
	}

	registerUser(event) {
		event.preventDefault();
		var sUsername = this.state.user;
		var sFirstName = this.state.firstName;
		var sLastName = this.state.lastName;
		var sPassword = this.state.pass;
		this.props.registerUser(sFirstName, sLastName, sUsername, sPassword);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className={s.loginBox}>
						<center>
							<img src="images/logo.png" />
						</center>
						<form onSubmit={this.loginUser}>
							<input
								placeholder="Username"
								onChange={ev => this.handleChangeOf('user', ev)}
							/>
							<input
								type="password"
								onChange={ev => this.handleChangeOf('pass', ev)}
								placeholder="Password"
							/>
							<FlatButton primary onClick={this.loginUser} label="Login" />
							<FlatButton onClick={this.registerUser} label="Register" />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
