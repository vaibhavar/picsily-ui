import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.css';

class Header extends React.Component {
	render() {
		console.log(s);
		return (
			<header>
				<nav className={s.navigation}>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/profile">Profile</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
