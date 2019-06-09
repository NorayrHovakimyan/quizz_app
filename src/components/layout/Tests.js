import React from 'react';
import config from '../../config';
import firebase from 'firebase/app';
import 'firebase/auth'; // for authentication
import 'firebase/database'; // for realtime database
import PreLoader from '../PreLoader/PreLoader';
import SingleTest from '../TestTypes/SingleTest';
import MultiTest from '../TestTypes/MultiTest';
import OutputTest from '../TestTypes/OutputTest';
// import Form from './Form';
import './tests.css';
import { Link } from 'react-router-dom';
firebase.initializeApp(config);

const database = firebase.database();

class Tests extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			authenticated: true,
			loading: false,
			questions: null,
			index: 0,
			// userPickedAnswers: [],
			userPickValue: null,
			rightAnswersAmount: 0,
			// currPick: [],
			checked: false,
			activeQuestion: 'activeQuestion',
			activeIndex: 0,
			rightAnswers: 0
		};

		this.iterateQuestion = this.iterateQuestion.bind(this);
		// this.getCurrPickedValue = this.getCurrPickedValue.bind(this);
		this.getCurrVal = this.getCurrVal.bind(this);
		this.questionNumber = this.questionNumber.bind(this);
		this.changeCurrentQuestion = this.changeCurrentQuestion.bind(this);
	}

	updateCurr = state => {
		let q1 = localStorage.getItem('questionUserPick1');
		q1 = JSON.parse(q1);
		let q2 = localStorage.getItem('questionUserPick2');
		q2 = JSON.parse(q2);
		let q3 = localStorage.getItem('questionUserPick3');
		q3 = JSON.parse(q3);

		let all = [];
		all.push(q1, q2, q3);
		// debugger;

		state.setState = {
			getCurrPickedAnswers: all
		};
		// console.log(all, 'userpick');
	};

	componentDidMount() {
		// debugger
		const questionsRef = database.ref('allQuestions');
		// console.log(questionsRef);
		questionsRef.on('value', snapshot => {
			let questions = snapshot.val();
			let newDB = [];
			// let index = this.state.index;
			for (let index in questions) {
				if (questions.hasOwnProperty(index)) {
					newDB.push({
						id: questions[index].id,
						type: questions[index].type,
						rightAnswer: questions[index].rightAnswer,
						title: questions[index].title,
						answers: questions[index].answers,
						imageUrl: questions[index].imageUrl
					});
				}
			}
			// console.log(newDB, "newDB");
			this.setState({
				questions: newDB,
				loading: false
			});
		});
	}

	componentWillUpdate(nextProps, nextState) {
		this.updateCurr(this.state);
		localStorage.setItem('currentQuestionIndex', JSON.stringify(nextState.activeIndex));
	}

	changeCurrentQuestion(e, i) {
		e.preventDefault();
		e.stopPropagation();
		// let checked = this.state.checked;
		// debugger

		localStorage.getItem(
			'currentQuestionIndex',
			this.setState({
				activeIndex: i,
				index: i,
				checked: false,
				activeQuestion: 'activeQuestion'
			})
		);

		// this.setState({
		// index: i,
		// checked: false,
		// activeQuestion: 'active'
		// });

		// this.updateCurr(this.state);
	}

	questionNumber = (amount, curr) => {
		// console.log(curr);
		// debugger;

		// console.log(amount, curr);

		// debugger

		return (
			<div className="center">
				{[...Array(amount)].map((e, i) => {
					let x = i + 1;
					return (
						<span key={i}>
							<button
								key={i}
								style={{ marginRight: '10px' }}
								className={`${this.state.activeIndex === i
									? this.state.activeQuestion
									: ''} btn-floating waves-effect waves-light`}
							>
								<i
									onClick={e => {
										// debugger;
										e.stopPropagation();
										this.changeCurrentQuestion(e, i);
									}}
									key={i}
									className="material-icons"
								>
									{x}
								</i>
							</button>
							{/*{--i}*/}
						</span>
					);
				})}
			</div>
		);
	};

	go() {
		if (this.state.questions !== null && this.state.questions.length > 0) {
			if (this.state.index === this.state.questions.length) {
				this.updateCurr(this.state);
				// let multiArr = this.state.currPick;
				let allAnswers = this.state.setState.getCurrPickedAnswers;
				// allAnswers = allAnswers.concat(multiArr);
				// let withoutDuplicates = [...new Set(allAnswers)];
				// console.log(withoutDuplicates);

				let questions = this.state.questions;
				let rights = 0;
				allAnswers.forEach((item, index) => {
					if (questions[index].rightAnswer.includes(item) && questions[index].rightAnswer[index]) {
						rights++;
						this.setState({
							rightAnswers: rights
						});
						// alert(this.state.rightAnswers);
					}
				});

				// debugger;
				// let currUser = firebase.auth().currentUser; // if not signed in then will be null
				let rootRef = firebase.database().ref();

				let userAnswersRef = rootRef.child('userAnswers');

				// console.log(currUser, 'curruser');
				// console.log(allAnswers, 'allAnswers');

				userAnswersRef.push(allAnswers);

				localStorage.removeItem('questionUserPick1');
				localStorage.removeItem('questionUserPick2');
				localStorage.removeItem('questionUserPick3');
				localStorage.removeItem('currentQuestionIndex');

				console.log('done!');

				// firebase
				// 	.database()
				// 	.ref('userTestData')
				// 	.push(allAnswers);
				// console.log('done!');

				return (
					<div>
						<h1 className="center">
							You`ve Scored {this.state.rightAnswers} from {this.state.questions.length}
						</h1>
						<h3 className="center">
							<Link to="/form">Click me!</Link>
						</h3>
					</div>
				);
			}

			let { index } = this.state;
			// debugger

			// let count = this.state.questions.length;

			// console.log(index, count);

			let x = this.state.questions[index];
			// console.log(this.state.questions[index]);
			// console.log(this.state.currQuestion);

			// let rightComponentRender = x => console.log(x);

			let questionNumber = this.questionNumber(this.state.questions.length, index);

			switch (x.type) {
				case 'outputSelect':
					return (
						<div className="container">
							{questionNumber}
							<OutputTest
								questionCount={this.state.questions.length}
								data={x}
								// iterateQuestion={this.iterateQuestion}
								getCurrPickedValue={this.getCurrPickedValue}
								userPickedAnswers={this.state.userPickedAnswers}
								checked={this.state.checked}
								checkedChanger={this.checkedChanger}
							/>
							<button
								className="waves-effect waves-light btn"
								style={{
									width: '10em'
								}}
								onClick={this.iterateQuestion}
							>
								next
							</button>
						</div>
					);
				case 'singleSelect':
					return (
						<div className="container">
							{questionNumber}
							<SingleTest
								questionCount={this.state.questions.length}
								data={x}
								// iterateQuestion={this.iterateQuestion}
								getCurrPickedValue={this.getCurrPickedValue}
								userPickedAnswers={this.state.userPickedAnswers}
							/>
							<button
								className="waves-effect waves-light btn"
								style={{
									width: '10em'
								}}
								onClick={this.iterateQuestion}
							>
								next
							</button>
						</div>
					);
				case 'multiSelect':
					return (
						<div className="container">
							{questionNumber}
							<MultiTest
								questionCount={this.state.questions.length}
								data={x}
								// iterateQuestion={this.iterateQuestion}
								getCurrPickedValue={this.getCurrPickedValue}
								userPickedAnswers={this.state.userPickedAnswers}
								toggleAttributeChecked={this.state.toggleAttributeChecked}
								currPick={this.state.currPick}
								getCurrVal={this.getCurrVal}
							/>
							<button
								className="waves-effect waves-light btn"
								style={{
									width: '10em'
								}}
								onClick={this.iterateQuestion}
							>
								next
							</button>
						</div>
					);
				default:
					return <PreLoader />;
			}
			// rightComponentRender.bind(this);
			// rightComponentRender(x);
		}
	}

	iterateQuestion(e) {
		// let pick = [];
		// pick.push(pickedVal);

		// let userPickedAnswers = this.state.userPickedAnswers;

		// userPickedAnswers.push(this.state.userPickValue);
		this.setState({
			// userPickedAnswers: pick,
			// userPickValue: null,
			index: this.state.index + 1,
			activeIndex: this.state.index + 1
		});

		// console.log(this.state.userPickedAnswers);
	}

	// getCurrPickedValue(e) {
	// 	// e.preventDefault();
	// 	// e.stopPropagation();
	// 	let checked = this.state.checked;

	// 	this.setState({
	// 		userPickValue: e.currentTarget.value,
	// 		checked: !checked
	// 	});
	// 	console.log(e.currentTarget.value, this.state.checked, 'checked');
	// }

	getCurrVal(e) {
		// e.preventDefault();
		e.stopPropagation();

		window.state = this.state;
		let data = this.state.currPick;

		let value = e.currentTarget.value;
		if (data.includes(value)) {
			data = data.filter(item => item !== value);

			// console.log(data);

			this.setState({
				currPick: data
			});
		} else {
			data.push(value);
			this.setState({
				currPick: data
			});
		}
	}

	render() {
		let index = this.state.index;
		window.state = this.state;
		return (
			<div className="#e3f2fd blue lighten-5">
				{this.state.questions !== null ? this.go(index) : <PreLoader />}
			</div>
		);
	}
}

export default Tests;
