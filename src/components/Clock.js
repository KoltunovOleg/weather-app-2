import React, { Component } from 'react';
import moment from 'moment';

class Clock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// localTime: new Date(),
			timeZone: this.props.timeZone,
			time: moment.tz(new Date(), this.props.timeZone).format("HH:mm")
		};
	}

	componentDidMount() {
		// console.log(this.state.timeZone);
		// const time = moment.tz(this.state, this.state.timeZone).format();
		// console.log(time);
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillReceiveProps(nextProps) {
		// console.log(nextProps);
		// let time = 'time';
		
		// this.setState({
		// 	time: new Date(),
		// 	timeZone: nextProps.timeZone
		// },
		// 	() => {
		// 		console.log(this.state.timeZone);
		// 		time = moment.tz(this.state.time, this.state.timeZone).valueOf();
		// 		this.setState({
		// 			time: time
		// 		});
		// 		// console.log(time);
		// 		// console.log(new Date());
		// });

		
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
		// const II = new Date(1551346733608);
		// console.log(II);
		// II.setMinutes(II.getMinutes() + 1);
		// console.log(II);
		return (
			<div className="time">
				<span>{this.state.time}</span>
			</div>
		);
	}
}

export default Clock;