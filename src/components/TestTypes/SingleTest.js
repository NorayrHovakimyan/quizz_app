import React from 'react';

class SingleTest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPickedAnswer: null
		};

		this.changeHandler = this.changeHandler.bind(this);
	}

	changeHandler(e) {
		e.preventDefault();
		this.setState({
			currentPickedAnswer: e.currentTarget.value
		});
	}

	componentDidMount() {
		localStorage.getItem('questionUserPick2') &&
			this.setState({
				currentPickedAnswer: JSON.parse(localStorage.getItem('questionUserPick2'))
			});
	}
	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('questionUserPick2', JSON.stringify(nextState.currentPickedAnswer));
	}

	render() {
		// console.log(this.props);

		let { data } = this.props;

		let answers = this.props.data.answers;

		return (
			<div className="container">
				{/*<div> rightAnswer: {data.rightAnswer} </div>*/}
				<div> type: {data.type} </div>

				<h5>
					{data.id} from {this.props.questionCount}
				</h5>
				<h4 className="center">{data.title} </h4>
				<div>
					<p>
						<button
							onClick={this.changeHandler}
							className={
								this.state.currentPickedAnswer === answers.answer1
									? 'activeTest btnCustom-default'
									: 'btnCustom-default'
							}
							value={answers.answer1}
						>
							{answers.answer1}
						</button>
						{/* <label>
              <input name="group1"
                     type="radio"
                     onChange={this.props.getCurrPickedValue}
                     value={answers.answer1}/>
              <span>{answers.answer1} </span>
            </label> */}
					</p>
					<p>
						<button
							onClick={this.changeHandler}
							className={
								this.state.currentPickedAnswer === answers.answer2
									? 'activeTest btnCustom-default'
									: 'btnCustom-default'
							}
							value={answers.answer2}
						>
							{answers.answer2}
						</button>
					</p>
					<p>
						<button
							onClick={this.changeHandler}
							className={
								this.state.currentPickedAnswer === answers.answer3
									? 'activeTest btnCustom-default'
									: 'btnCustom-default'
							}
							value={answers.answer3}
						>
							{answers.answer3}
						</button>
					</p>
					<p>
						<button
							onClick={this.changeHandler}
							className={
								this.state.currentPickedAnswer === answers.answer4
									? 'activeTest btnCustom-default'
									: 'btnCustom-default'
							}
							value={answers.answer4}
						>
							{answers.answer4}
						</button>
					</p>
				</div>
				{/* <button
					className="waves-effect waves-light btn"
					style={{
						width: '10em'
					}}
					onClick={this.props.iterateQuestion}
				>
					next
				</button> */}
			</div>
		);
	}
}

export default SingleTest;
