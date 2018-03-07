// login
import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import s from './style.css';

class Login extends React.Component {
	render() {
		return (
			<div className={s.loginBox}>
				<center>
					<img src="images/logo.png" />
				</center>
				<Form>
					<Form.Field>
						<input placeholder="Username" />
					</Form.Field>
					<Form.Field>
						<input type="password" placeholder="Password" />
					</Form.Field>
					<Button type="submit">Login</Button>
				</Form>
			</div>
		);
	}
}
b;
export default Login;
