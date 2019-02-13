import React, { Component } from 'react';

class Clock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			time: new Date()
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
			time: new Date()
		});
	}

	render() {
		return (
			<div className="time">
				<span>{this.state.time.toLocaleTimeString()}</span>
			</div>
		);
	}
}

export default Clock;