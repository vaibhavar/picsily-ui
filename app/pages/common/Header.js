import React from 'react';
import { Link } from 'react-router-dom';
import TiHomeOutline from 'react-icons/lib/ti/home-outline';
import TiThLargeOutline from 'react-icons/lib/ti/th-large-outline';
import TiPointOfInterest from 'react-icons/lib/ti/point-of-interest';
import TiUserOutline from 'react-icons/lib/ti/user-outline';

import s from './style.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
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
							Picsily
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

export default Header;
