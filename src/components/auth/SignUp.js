import React from 'react';
import firebase from 'firebase/app';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			firstName: '',
			lastName: ''
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
		// console.log(this.state.email,this.state.password);
	};
	signUp = e => {
		e.preventDefault();
		// console.log(this.state.email, this.state.password, this.state.firstName, this.state.lastName);
		firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(u => {
				alert("U've created new user");
				window.location.pathname = '/signIn';
			})
			.catch(err => {
				alert(err.message);
			});
	};

	render() {
		return (
			<div className="container m-2">
				<form className="white">
					<h3 className="center grey-text text-darken-3" style={{ marginBottom: 30 }}>
						Sign up
					</h3>

					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="firstName">First Name</label>
						<input type="text" id="firstName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" onChange={this.handleChange} />
					</div>
				</form>
				<div className="input-field">
					<button className="btn pink lighten-1 z-deph-0" onClick={this.signUp}>
						Sign up
					</button>
				</div>
			</div>
		);
	}
}
export default SignUp;
