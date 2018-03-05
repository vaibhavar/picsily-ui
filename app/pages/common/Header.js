import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import s from './style.css';

class Header extends React.Component {
	render() {
		console.log(s);
		return (
			<header>
				<nav className={s.navigation}>
					<ul>
						<li>
							<Button animated>
								<Button.Content visible>Picsily</Button.Content>
								<Button.Content hidden>
									<Icon name="right arrow" />
								</Button.Content>
							</Button>
						</li>
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
