import React, { Component } from 'react';
import Location from './components/Location';
import DateComponent from './components/DateComponent';
import Clock from './components/Clock';
import Weather from './components/Weather';
import Nav from './components/Nav';
import customData from './weather.json';
import './styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			error: null,
			isLoaded: false,
			dataArr: customData,
			bgImg: "",
			daypart: "",
			showDrop: false,
		};

		this.onShowDrop = this.onShowDrop.bind(this);
	}

	onShowDrop () {
		this.setState({showDrop: !this.state.showDrop });
	}

	componentDidMount() {
		this.setBgImage();
		//http://api.openweathermap.org/data/2.5/weather?zip=61031,ua&units=metric&lang=ua&APPID=54688ee88a6a2630601c504f2b93f60a
		// fetch("./weather.json")
		// 	.then(res => res.json())
		// 	.then(
		// 		(result) => {
		// 			console.log(result);
		// 			this.setState({
		// 				isLoaded: true,
		// 				dataArr: result
		// 			});
		// 			this.setBgImage();
		// 		},
		// 		// Note: it's important to handle errors here
		// 		// instead of a catch() block so that we don't swallow
		// 		// exceptions from actual bugs in components.
		// 		(error) => {
		// 			console.log(error);
		// 			this.setState({
		// 				isLoaded: true,
		// 				error
		// 			});
		// 		}
		// 	);
	}

	getDayTime() {
		const date = new Date(),
		dataArr = this.state.dataArr;
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

	setBgImage() {
		this.setState({
			bgImg: "url('img/bg-" + this.getDayTime() + ".jpg')",
			daypart: this.getDayTime()
		});
	}



	render() {
		const { bgImg, daypart, dataArr, showDrop} = this.state;
		const classHidden = showDrop ? "active-nav" : "";
		return (
			<div className={`app ${daypart} ${classHidden}`} style={{backgroundImage: bgImg}}>
				<header className="app-header">
					<Nav onShowDrop={this.onShowDrop} />
				</header>
				<Location/>
				<div className="date-holder">
					<DateComponent/>
					<Clock/>
				</div>
				<Weather dataArr={dataArr} />
			</div>
		);
	}
}

export default App;