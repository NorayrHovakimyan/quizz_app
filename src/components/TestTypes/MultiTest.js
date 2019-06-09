import React from 'react';

class MultiTest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// currPick: this.props.currPick,
			// nowPicked: null
			hasClassName: false,
			currPickedAnswers: []
		};
		// this.getCurrVal = this.getCurrVal.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e) {
		let currPickedAnswers = this.state.currPickedAnswers;
		let allPicks = currPickedAnswers;
		if (!currPickedAnswers.includes(e.currentTarget.value)) {
			allPicks.push(e.currentTarget.value);
			this.setState({
				currPickedAnswers: allPicks
			});
		} else {
			allPicks.forEach((item, index) => {
				if (item.indexOf(e.currentTarget.value) !== -1) {
					allPicks.splice(index, 1);
					this.setState({
						currPickedAnswers: allPicks
					});
				}
			});
		}
		// console.log(allPicks);
		// console.log(this.state.currPick);
	}

	componentDidMount() {
		localStorage.getItem('questionUserPick3') &&
			this.setState({
				currPickedAnswers: JSON.parse(localStorage.getItem('questionUserPick3'))
			});
	}
	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('questionUserPick3', JSON.stringify(nextState.currPickedAnswers));
		// debugger;
	}

	render() {
		let { data } = this.props;
		let answers = this.props.data.answers;
		window.s = this.state;

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
							onClick={this.clickHandler}
							className={
								this.state.currPickedAnswers.includes(answers.answer1)
									? 'activeTest btnCustom-default'
									: 'btnCustom-default'
							}
							value={answers.answer1}
						>
							{answers.answer1}
						</button>
						{/* <label>
              <input name="group1"
                     type="checkbox"
                     onChange={this.props.getCurrPickedValue}
                     onClick={this.props.getCurrVal}
                     value={answers.answer1}
              />
              <span>{answers.answer1} </span>
            </label> */}
					</p>
					<p>
						<button
							onClick={this.clickHandler}
							className={
								this.state.currPickedAnswers.includes(answers.answer2)
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
							onClick={this.clickHandler}
							className={
								this.state.currPickedAnswers.includes(answers.answer3)
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
							onClick={this.clickHandler}
							className={
								this.state.currPickedAnswers.includes(answers.answer4)
									? 'activeTest btnCustom-default'
									: 'btnCustom-default'
							}
							value={answers.answer4}
						>
							{answers.answer4}
						</button>
						{/* <label>
              <input name="group4"
                     type="checkbox"
                     onChange={this.props.getCurrPickedValue}
                     onClick={this.props.getCurrVal}
                     value={answers.answer4}
              />
              <span>{answers.answer4}</span>
            </label> */}
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

export default MultiTest;
