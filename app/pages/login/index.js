// login
import React from 'react';
import s from './style.css';

class Login extends React.Component {
	render() {
		return (
			<div className={s.loginBox}>
				<center>
					<img src="images/logo.png" />
				</center>
				<input placeholder="Username" />
				<input type="password" placeholder="Password" />
				<button type="submit">Login</button>
			</div>
		);
	}
}

export default Login;
