import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Tests from './components/layout/Tests';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import SignedInLinks from './components/layout/SignedInLinks';
import SignedOutLinks from './components/layout/SignedOutLinks';
import Home from './components/layout/Home';
import firebase from 'firebase/app';
import 'firebase/auth'; // for authentication
import 'firebase/database'; // for realtime database
// import PreLoader from './components/PreLoader/PreLoader';
// import Navbar from './components/layout/Navbar';

//
import Form from './components/layout/Form';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			logged: true,
			userPickedAnswers: []
		};

		this.loggedIn = this.loggedIn.bind(this);
		this.loggedOut = this.loggedOut.bind(this);
	}

	loggedIn() {
		this.setState({
			logged: true
		});
	}

	loggedOut() {
		firebase.auth().signOut();
		this.setState({
			logged: false
		});
	}

	componentDidMount() {
		this.authListener();
	}

	authListener() {
		firebase.auth().onAuthStateChanged(logged => {
			this.state.logged
				? this.setState({
						logged: true
					})
				: this.setState({
						logged: false
					});
		});
	}

	render() {
		window.state = this.state;

		return (
			<BrowserRouter>
				<div className="app">
					<nav className="nav-wrapper grey darken-3">
						<div className="container">
							{this.state.logged ? <SignedInLinks loggedOut={this.loggedOut} /> : <SignedOutLinks />}
						</div>
					</nav>
					<Switch>
						{this.state.logged === false
							? [
									<Route
										key={Math.round(Math.random * 100)}
										path="/signIn"
										render={() => <SignIn loggedIn={this.loggedIn} loggedOut={this.loggedOut} />}
									/>,
									<Route
										key={Math.round(Math.random * 100)}
										path="/signUp"
										render={() => <SignUp loggedIn={this.loggedIn} />}
									/>
								]
							: [
									<Route key={Math.round(Math.random * 100)} exact path="/tests" component={Tests} />,
									<Route key={Math.round(Math.random * 100)} exact path="/" component={Home} />,
									<Route key={Math.round(Math.random * 100)} exact path="/form" component={Form} />
								]}
					</Switch>
				</div>

				{/*<h1>*/}
				{/*  {this.state.text} {this.state.speed}*/}
				{/*</h1>*/}
			</BrowserRouter>
		);
	}
}

export default App;
