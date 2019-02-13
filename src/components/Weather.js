import React, { Component } from 'react';
import '../styles/Weather.css';

class Weather extends Component {
	constructor(props) {
		super(props);

		this.state = {
			iconUrl: ""
		};


		// this.dataArr = this.props.dataArr;

	}

	componentDidMount() {

	}

	componentWillReceiveProps(nextProps) {
		
		this.setWeatherIcon(nextProps);
	}

	setWeatherIcon(nextProps) {
		let weatnerID = nextProps.dataArr.weather[0].id,
		daypart = this.getDayTime(nextProps);
		if (weatnerID === 800 && daypart === "day") {
			this.setState({iconUrl: "/img/collection/bright.svg"});
		} else if (weatnerID === 800 && daypart === "night.svg") {
			this.setState({iconUrl: "/img/collection/night.svg"});
		} else if (weatnerID === 801 && daypart === "day") {
			this.setState({iconUrl: "/img/collection/cloud.svg"});
		} else if (weatnerID === 801 && daypart === "night") {
			this.setState({iconUrl: "/img/collection/cloudy-night.svg"});
		} else if (802 <= weatnerID && weatnerID <= 804) {
			this.setState({iconUrl: "/img/collection/cloud.svg"});
		} else if (weatnerID === 500 && daypart === "day" ) {
			this.setState({iconUrl: "/img/collection/light-rain-day.svg"});
		} else if (weatnerID === 500 && daypart === "night" ) {
			this.setState({iconUrl: "/img/collection/light-rain-night.svg"});
		} else if (weatnerID >= 501 && weatnerID <= 531
		 || weatnerID >= 300 && weatnerID <= 321 ) {
			this.setState({iconUrl: "/img/collection/rain.svg"});
		} else if (600 <= weatnerID && weatnerID <= 622) {
			this.setState({iconUrl: "/img/collection/snow.svg"});
		} else if (200 <= weatnerID && weatnerID <= 232) {
			this.setState({iconUrl: "/img/collection/storm.svg"});
		} else if (700 <= weatnerID && weatnerID <= 781) {
			this.setState({iconUrl: "/img/collection/foggy.svg"});
		}
	}

		getDayTime(nextProps) {
		const date = new Date(),
		dataArr = nextProps.dataArr;
		const sunrise = new Date(dataArr.sys.sunrise * 1000); //Convert a Unix timestamp to time
		const sunset = new Date(dataArr.sys.sunset * 1000);
		let daypart= "";

		/* Get suitable icon for weather */
		if (date.getHours() >= sunrise.getHours() && date.getHours() < sunset.getHours()) {
			daypart = "day";
		} else if (date.getHours() >= sunset.getHours()  || date.getHours() < sunrise.getHours()) {
			daypart = "night";
		}

		return daypart;
	}

	render() {
		const { dataArr } = this.props;
		const { iconUrl } = this.state;


		if (!dataArr) {
			return (
				<div className="weather-holder"></div>
			);
		} else {
			return (
				<div className="weather-holder">
					<div className="cloud">
						<img className="wicon" src={iconUrl} alt="Weather icon." />
					</div>
					<div className="temp"><span>{dataArr.main.temp} &ordm;C</span></div>
					<div className="precipitation">{dataArr.weather[0].main}</div>
					<div className="wind">{dataArr.wind.speed} m/s</div>
				</div>
			);
		}
	}
}

export default Weather;