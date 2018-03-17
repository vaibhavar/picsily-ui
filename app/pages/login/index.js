// login
import React from 'react';
import { connect } from 'react-redux';

import s from './style.css';
import { RaisedButton } from 'material-ui';
import { TextField } from 'material-ui';
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
			pass2: '',
			email: '',
			mode: 'loginMode',
		};

		this.handleChangeOf = this.handleChangeOf.bind(this);
		this.loginUser = this.loginUser.bind(this);
		this.registerUser = this.registerUser.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

	handleSubmit() {
		switch (this.state.mode) {
			case 'loginMode':
				this.loginUser();
				break;
			case 'registerMode':
				this.registerUser();
				break;
			default:
				this.loginUser();
				break;
		}
	}

	validateLogin() {
		if (this.state.user && this.state.password) {
			return true;
		}
		return false;
	}

	validateRegister() {
		if (!this.state.user) {
			return false;
		}
		if (!this.state.pass) {
			return false;
		}
		if (this.state.pass !== this.state.pass2) {
			return false;
		}
		if (!this.state.email) {
			return false;
		}

		//TODO: Validate email

		return true;
	}

	validateForm() {
		switch (this.state.mode) {
			case 'loginMode':
				return this.validateLogin();
				break;
			case 'registerMode':
				return this.validateRegister();
				break;
		}
	}

	registerUser(event) {
		event.preventDefault();
		var sUsername = this.state.user;
		var sFirstName = this.state.firstName;
		var sLastName = this.state.lastName;
		var sPassword = this.state.pass;

		this.setState({ mode: 'registerMode' });

		//this.props.registerUser(sFirstName, sLastName, sUsername, sPassword);
	}

	getLoginClass(sMode) {
		return sMode === 'registerMode' ? s.registerMode : '';
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className={s.loginContainer}>
						<div className={`${s.loginBox} col-md-4`}>
							<form
								onSubmit={this.handleSubmit}
								className={`${s.loginForm} ${this.getLoginClass(this.state.mode)}`}
							>
								<TextField
									style={{ width: '100%' }}
									fullWidth={true}
									className={s.loginInput}
									floatingLabelText="Username"
									onChange={ev => this.handleChangeOf('user', ev)}
								/>
								<TextField
									style={{ width: '100%' }}
									fullWidth={true}
									className={s.loginInput}
									type="password"
									onChange={ev => this.handleChangeOf('pass', ev)}
									floatingLabelText="Password"
								/>
								<TextField
									style={{ width: '100%' }}
									fullWidth={true}
									className={`${s.loginInput} ${s.registerFields}`}
									type="password"
									onChange={ev => this.handleChangeOf('pass2', ev)}
									floatingLabelText="Password (Again)"
								/>
								<TextField
									style={{ width: '100%' }}
									fullWidth={true}
									className={`${s.loginInput} ${s.registerFields}`}
									type="email"
									onChange={ev => this.handleChangeOf('email', ev)}
									floatingLabelText="E-mail"
								/>

								<RaisedButton primary onClick={this.loginUser} label="Login" />
								<RaisedButton onClick={this.registerUser} label="Register" />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
