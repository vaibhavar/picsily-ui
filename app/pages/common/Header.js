import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TiHomeOutline from 'react-icons/lib/ti/home-outline';
import TiThLargeOutline from 'react-icons/lib/ti/th-large-outline';
import TiPointOfInterest from 'react-icons/lib/ti/point-of-interest';
import TiUserOutline from 'react-icons/lib/ti/user-outline';
import TiPower from 'react-icons/lib/ti/power';
import TiHeartOutline from 'react-icons/lib/ti/heart-outline';

import { logoutUser } from '../../core/actions/user';

import s from './style.css';

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		logoutUser: () => {
			dispatch(logoutUser());
		},
	};
}

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.logout = this.logout.bind(this);
	}

	logout() {
		this.props.logoutUser();
	}

	getLoggedInMenuItems() {
		return (
			<li className={`nav-item `}>
				<Link to="/" onClick={this.logout}>
					<TiPower size="18" color="#828080" />
					<span className={s.picsilyNavBarText}>Logout</span>
				</Link>
			</li>
		);
	}

	getPublicMenuItems() {
		return (
			<li className={`nav-item  `}>
				<Link to="/join">
					<TiHeartOutline size="18" color="#828080" />
					<span className={s.picsilyNavBarText}>Join</span>
				</Link>
			</li>
		);
	}

	getMenuItems(bLoggedIn) {
		return bLoggedIn ? this.getLoggedInMenuItems() : this.getPublicMenuItems();
	}

	getActiveClass(sLink) {
		return sLink === this.props.activeUrl ? s.activeLink : '';
	}

	render() {
		this.getActiveClass();
		return (
			<header>
				<nav className={`navbar navbar-expand-lg fixed-top ${s.picsilyNavBar}`}>
					<div className="container">
						<Link className="navbar-brand" to="/">
							<img alt="Picsily" src="images/logo.png" />
						</Link>

						<ul className={`navbar-nav mr-auto ${s.picsilyNavBarUl}`}>
							<li className={`nav-item ${this.getActiveClass('/')} `}>
								<Link to="/">
									<TiHomeOutline size="18" color="#828080" />
									<span className={s.picsilyNavBarText}> Home</span>
								</Link>
							</li>
							<li className={`nav-item ${this.getActiveClass('/collections')} `}>
								<Link to="/collections">
									<TiThLargeOutline size="18" color="#828080" />
									<span className={s.picsilyNavBarText}>Collections</span>
								</Link>
							</li>
							<li className={`nav-item ${this.getActiveClass('/browse')} `}>
								<Link to="/browse">
									<TiPointOfInterest size="18" color="#828080" />
									<span className={s.picsilyNavBarText}>People</span>
								</Link>
							</li>
							<li className={`nav-item ${this.getActiveClass('/profile')} `}>
								<Link to="/profile">
									<TiUserOutline size="18" color="#828080" />
									<span className={s.picsilyNavBarText}>Profile</span>
								</Link>
							</li>
							{this.getMenuItems(this.props.loggedIn)}
							{/*
								Commented till a better search bar comes to mind 
							<li className={`nav-item ${s.picsilySearchBar}`}>
								<input
									className={s.picsilySearchBarText}
									placeholder="Search (tags, categories, users)"
								/>
							</li>*/}
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
