import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database'; // for realtime database
import s from './Form.module.css';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			telephone: '',
			comments: ''
		};
		this.getValues = this.getValues.bind(this);
		this.sendUserData = this.sendUserData.bind(this);
	}

	sendUserData() {
		// let currUser = firebase.auth().currentUser; // if not signed in then will be null
		let rootRef = firebase.database().ref('userAnswers');
		let userAnswersRef = rootRef.child('userPersonalData');

		userAnswersRef.push({
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			email: this.state.email,
			telephone: this.state.telephone,
			comments: this.state.comments
		});
		window.location.pathname = '/home';
	}

	getValues(e) {
		e.preventDefault();
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});

		// switch (e.currentTarget.name) {
		// 	case 'firstname':
		// 		this.setState({
		// 			firstname: e.currentTarget.value
		// 		});
		// 		break;
		// 	case 'lastname':
		// 		this.setState({
		// 			lastname: e.currentTarget.value
		// 		});
		// 		break;
		// 	case 'email':
		// 		this.setState({
		// 			email: e.currentTarget.value
		// 		});
		// 		break;
		// 	case 'telephone':
		// 		this.setState({
		// 			telephone: e.currentTarget.value
		// 		});
		// 		break;
		// 	case 'comments':
		// 		this.setState({
		// 			comments: e.currentTarget.value
		// 		});
		// }
		// console.log(e.currentTarget.name);
		// console.log(e);
	}

	render() {
		window.state = this.state;
		return (
			<div className="container">
				<div className="row">
					<form className="col s12" htmlFor="">
						<div className="row">
							<div className="input-field col s6">
								<input
									id="icon_prefix"
									type="text"
									name="firstname"
									onChange={this.getValues}
									value={this.state.firstname}
									className="validate"
									pattern="[a-zA-Z0-9/.& -]+"
									required
								/>

								<label htmlFor="icon_prefix">
									<i className={`${s.i} fas fa-user-tie`} /> First Name
								</label>
							</div>
							<div className="input-field col s6">
								<input
									id="icon_prefix"
									type="text"
									name="lastname"
									onChange={this.getValues}
									value={this.state.lastname}
									className="validate"
									pattern="[a-zA-Z0-9/.& -]+"
									required
								/>

								<label htmlFor="icon_prefix">
									<i className={`${s.i} fas fa-user-tie`} /> Last Name
								</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input
									id="email"
									type="email"
									name="email"
									onChange={this.getValues}
									value={this.state.email}
									className="validate"
									pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
									required
								/>
								<label htmlFor="email">
									<i className="fas fa-at" /> Email
								</label>
								<span
									className="helper-text"
									data-error="Wrong Email Format"
									data-success="Valid Email Adress"
								/>
							</div>
							<div className="input-field col s6">
								<input
									id="icon_telephone"
									type="tel"
									name="telephone"
									value={this.state.telephone}
									onChange={this.getValues}
									className="validate"
									pattern="\d{3}\d{2}\d{2}\d{2}"
									placeholder="077112233"
									required
								/>
								<label htmlFor="icon_telephone">
									<i className={`${s.i} fas fa-phone-alt`} /> Telephone
								</label>
							</div>
						</div>

						<div className="row">
							<div className="input-field col s12">
								<textarea
									id="comments"
									name="comments"
									value={this.state.comments}
									onChange={this.getValues}
									className="materialize-textarea"
									required
								/>
								<label htmlFor="comments" className="active">
									<i className="fas fa-comments" /> Comments
								</label>
							</div>
						</div>
						<div className="row">
							<div className="col sm-6 offset-s5">
								<div className="center">
									<button onClick={this.sendUserData} className={`${s.btn} btn`}>
										Send
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Form;
