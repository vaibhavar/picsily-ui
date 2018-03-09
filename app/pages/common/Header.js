import React from 'react';
import { Link } from 'react-router-dom';
import TiHomeOutline from 'react-icons/lib/ti/home-outline';
import TiThLargeOutline from 'react-icons/lib/ti/th-large-outline';
import TiPointOfInterest from 'react-icons/lib/ti/point-of-interest';
import TiUserOutline from 'react-icons/lib/ti/user-outline';

import s from './style.css';

class Header extends React.Component {
	render() {
		return (
			<header>
				<nav className={`navbar navbar-expand-lg fixed-top ${s.picsilyNavBar}`}>
					<div className="container">
						<Link className="navbar-brand" to="/">
							Picsily
						</Link>

						<ul className={`navbar-nav mr-auto ${s.picsilyNavBarUl}`}>
							<li className="nav-item">
								<Link to="/">
									<TiHomeOutline size="18" color="#fd4885" />
									<span className={s.picsilyNavBarText}> Home</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/collections">
									<TiThLargeOutline size="18" color="#fd4885" />
									<span className={s.picsilyNavBarText}>Collections</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/browse">
									<TiPointOfInterest size="18" color="#fd4885" />
									<span className={s.picsilyNavBarText}>People</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/profile">
									<TiUserOutline size="18" color="#fd4885" />
									<span className={s.picsilyNavBarText}>Profile</span>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
