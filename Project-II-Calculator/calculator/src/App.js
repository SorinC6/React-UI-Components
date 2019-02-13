import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import * as math from 'mathjs';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			total: '0',
			input: ''
		};

		this.numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
		this.sign = [ '*', 'X', '-', '+' ];
		this.firstNumber = 0;
		this.secondNumber = 0;
	}

	clearDisplay = () => {
		console.log('clear');
		this.setState({ total: 0 });
	};
	numHandler = (nr) => {
		//this.setState({ total: 0 });
		console.log(nr);
		//this.setState({ total: [ ...this.state.total, nr ] });
		this.setState({ total: nr });
	};

	operatorHandler = (sign) => {
		console.log(sign);
		if (sign === '+') {
			this.firstNumber = this.state.total;
			console.log('First Number', this.firstNumber);
			this.setState({ total: 0 });
		}
	};

	equalOperator = () => {
		console.log('equal');

		this.secondNumber = this.state.total;
		console.log('Second', this.secondNumber);
		this.setState({ total: 0 });

		this.setState({ total: this.firstNumber + this.secondNumber });

		//const result=firstNumber+secondNumber;
		//const result = Number(this.firstNumber) + Number(this.secondNumber);
		//console.log('resulttttt', result);
	};

	render() {
		return (
			<div className="calculator">
				<Display text={this.state.total} />

				<div className="button-group">
					<div className="left-btn-group">
						<NumberButton handler={this.clearDisplay} buttonStyle="clear-style" number="clear" />
						{this.numbers.map((item) => (
							<NumberButton
								handler={() => this.numHandler(item)}
								key={item}
								buttonStyle="number-style"
								number={item}
							/>
						))}
						<NumberButton handler={this.clearDisplay} buttonStyle="clear-style" number="0" />
					</div>

					<div className="right-btn-group">
						{this.sign.map((item) => (
							<ActionButton
								handler={() => this.operatorHandler(item)}
								key={item}
								buttonStyle="function-button"
								sign={item}
							/>
						))}
						<ActionButton handler={this.equalOperator} buttonStyle="function-button" sign="=" />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
