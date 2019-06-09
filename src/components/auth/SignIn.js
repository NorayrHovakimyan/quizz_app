import React from 'react';
import firebase from 'firebase/app';
// import SignedInLinks from '../layout/SignedInLinks';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.id]: e.target.value
		});
		// console.log(this.state.email,this.state.password);
	};
	login = e => {
		// e.preventDefault();

		// this.setState({
		// logged: true
		// });
		// console.log(this.state.email, this.state.password);
		firebase
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(u => {
				// console.log(u);
				// debugger;
				this.props.loggedIn();
			})
			.catch(err => {
				console.log('wrong username or password');
			});
	};

	render() {
		// console.log(this.props);
		return (
			<div className="container m-2">
				<form className="white">
					<h3 className="center grey-text text-darken-3" style={{ marginBottom: 30 }}>
						Sign in
					</h3>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
				</form>
				<button className="btn" onClick={this.login}>
					Login
				</button>
			</div>
		);
	}
}
export default SignIn;
