import React, { Component } from 'react';
import Location from './components/Location';
import DateComponent from './components/DateComponent';
import Clock from './components/Clock';
import Weather from './components/Weather';
import Nav from './components/Nav';
import moment from 'moment';
import 'moment-timezone';
import cityTimezones from 'city-timezones';
import './styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			error: null,
			isLoaded: false,
			dataArr: false,
			bgImg: "",
			daypart: "",
			showDrop: false,
			listOfPlaces: [],
			locationInfo: ["Kiev", "UA"]
		};

		this.onShowDrop = this.onShowDrop.bind(this);
		this.addLocation = this.addLocation.bind(this);
		this.setCurrentPlace = this.setCurrentPlace.bind(this);
	}

	onShowDrop () {
		this.setState({showDrop: !this.state.showDrop });
	}

	componentDidMount() {

		// this.setBgImage();
		//http://api.openweathermap.org/data/2.5/weather?zip=61031,ua&units=metric&lang=ua&APPID=54688ee88a6a2630601c504f2b93f60a
		import("./weather.json")
			// .then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						dataArr: result
					});
					this.setBgImage();
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					console.log(error);
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
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

	addLocation(id, list) {
		const sourse = 'http://api.openweathermap.org/data/2.5/weather?q=';
		const endpoint = '&units=metric&APPID=54688ee88a6a2630601c504f2b93f60a';
		const url = sourse +list[0] +',' + list[1].toLowerCase() + endpoint;
		// console.log(list);
		fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
        	this.state.listOfPlaces.push({
        		id: id,
						name: list[0],
						country: list[1],
						dataArr: data
        	});
        	this.setState({
        		listOfPlaces: this.state.listOfPlaces
        	});
        });

		// console.log(this.state.listOfPlaces);
	}

	setCurrentPlace(id) {
		const arr = this.state.listOfPlaces;
		arr.forEach((item)=>{
			if(item.id === +id) {
				this.setState({
					dataArr:item.dataArr,
					locationInfo: [item.name, item.country]
				});
			}
		});

		// http://api.timezonedb.com/v2.1/get-time-zone?key=ABNP00XZPE7G&format=json&by=position&lat=51.51&lng=-0.13

	}

	render() {
		const { bgImg, daypart, dataArr, showDrop, listOfPlaces, locationInfo} = this.state;
		const classHidden = showDrop ? "active-nav" : "";
		const cityLookup = cityTimezones.lookupViaCity(locationInfo[0]);
		// console.log(cityLookup[0].timezone);
		return (
			<div className={`app ${daypart} ${classHidden}`} style={{backgroundImage: bgImg}}>
				<header className="app-header">
				<div>{moment.tz(new Date(), "Asia\/Oral").format("hh:mm A")}</div>
					<Nav  onShowDrop={this.onShowDrop} 
								addLocation={this.addLocation}
								listOfPlaces={listOfPlaces}
								setCurrentPlace={this.setCurrentPlace}
					 />
				</header>
				<Location locationInfo={locationInfo}/>
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