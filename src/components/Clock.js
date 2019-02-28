import React, { Component } from 'react';
import moment from 'moment';

class Clock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			timeZone: this.props.timeZone,
			time: moment.tz(new Date(), this.props.timeZone).format("HH:mm")
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
			time: moment.tz(new Date(), this.props.timeZone).format("HH:mm")
		});
	}

	render() {
		return (
			<div className="time">
				<span>{this.state.time}</span>
			</div>
		);
	}
}

export default Clock;