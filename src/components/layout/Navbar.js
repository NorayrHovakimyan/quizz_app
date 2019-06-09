import React from 'react';
// import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import PreLoader from '../PreLoader/PreLoader';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<nav className="nav-wrapper grey darken-3">
				<div className="container">
					{this.props.logged && <PreLoader /> ? <SignedInLinks /> : <SignedOutLinks />}
				</div>
			</nav>
		);
	}
}

export default Navbar;
