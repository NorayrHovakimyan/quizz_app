import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks = props => {
	return (
		<div>
			<ul className="right">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/tests">Tests</Link>
				</li>
				<li onClick={props.loggedOut}>
					<Link to="/logout">Log Out</Link>
				</li>
				<li>
					<Link to="/" className="btn btn-floating pink lighten-1">
						N
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SignedInLinks;
