import React from 'react';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
	return (
		<div>
			<ul className="right">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/signUp">Signup</Link>
				</li>
				<li>
					<Link to="/signIn">Login</Link>
				</li>
			</ul>
		</div>
	);
};

export default SignedOutLinks;
