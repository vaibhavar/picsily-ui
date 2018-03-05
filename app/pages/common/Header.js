import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

class Header extends React.Component {
	render() {
		return (
			<header>
				<nav>
					<ul>
						<li>
							<Button animated>
								<Button.Content visible>Next</Button.Content>
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
