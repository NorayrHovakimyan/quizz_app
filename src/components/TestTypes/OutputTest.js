import React from 'react';
import './stylesForTest.css';

class OutputTest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// userPickValue:this.props.userPickValue,
			// checked: false,
			currentPickedAnswer: null
		};

		// this.textInput = this.textInput.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
		// this.getCurrPickVal = this.getCurrPickVal.bind(this);
	}

	// getCurrPickVal(e) {}

	// checkedHandler(e) {}

	changeHandler(e) {
		e.preventDefault();
		// e.stopPropagation();

		this.setState({
			currentPickedAnswer: e.currentTarget.value
		});
		// console.log(e.currentTarget.value, 'asdadsa');
	}

	//WARNING! To be deprecated in React v17. Use componentDidMount instead.
	componentDidMount() {
		localStorage.getItem('questionUserPick1') &&
			this.setState({
				currentPickedAnswer: JSON.parse(localStorage.getItem('questionUserPick1'))
			});
	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('questionUserPick1', JSON.stringify(nextState.currentPickedAnswer));
	}

	render() {
		window.output = this.state;
		// console.log(this.props);
		// debugger
		let { data } = this.props;
		let answers = this.props.data.answers;
		// let questionNumber = this.props.questionNumber(this.props.questionCount,data.id);
		// console.log(this.props);

		return (
			<div className="container">
				{/*<div> rightAnswer: {data.rightAnswer} </div>*/}
				<div> type: {data.type} </div>

				<h5>
					{data.id} from {this.props.questionCount}
				</h5>
				<h4>{data.title} </h4>
				<div>
					<img src={`images/${data.imageUrl}`} alt="output" />
				</div>
				<form>
					<p>
						<button
							className={
								this.state.currentPickedAnswer === answers.answer1
									? 'activeTest btnCustom-default'
									: 'btnCustom-default'
							}
							onClick={this.changeHandler}
							value={answers.answer1}
						>
							{answers.answer1}
						</button>
					</p>
					<p>
						<button
							className={
								this.state.currentPickedAnswer === answers.answer2
									? 'activeTest btnCustom-default'
									: 'btnCustom-default'
							}
							onClick={this.changeHandler}
							value={answers.answer2}
						>
							{answers.answer2}
						</button>
					</p>
					<p>
						<button
							className={
								this.state.currentPickedAnswer === answers.answer3
									? 'activeTest btnCustom-default'
									: 'btnCustom-default'
							}
							onClick={this.changeHandler}
							value={answers.answer3}
						>
							{answers.answer3}
						</button>
					</p>
					<p>
						<button
							className={
								this.state.currentPickedAnswer === answers.answer4
									? 'activeTest btnCustom-default'
									: 'btnCustom-default'
							}
							onClick={this.changeHandler}
							value={answers.answer4}
						>
							{answers.answer4}
						</button>
					</p>
				</form>
			</div>
		);
	}
}

export default OutputTest;
