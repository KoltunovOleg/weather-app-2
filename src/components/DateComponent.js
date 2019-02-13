import React, { Component } from 'react';
import '../styles/CurrentDate.css';

class DateComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date()
		};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}
	render() {
		return (
			<div className="date">
					<span>{this.state.date.toDateString()}</span>
			</div>
		);
	}
}

export default DateComponent;