import React, { Component } from 'react';
import '../styles/Location.css';
import codes from '../countries-codes.json';

class Location extends Component {
	constructor(props) {
		super(props);
		this.state = {
			location: this.props.locationInfo
		}
	}

	componentDidMount() {
		this.getCountryName();
	}


	componentWillReceiveProps(nextProps) {
		this.getLocationName(nextProps);
	}


	getCountryName() {
		const countryCode = this.props.locationInfo[1];
		codes.forEach(item => {
			if(item.Code === countryCode) {
				this.state.location[1] = item.Name;
				this.setState({location: this.state.location});
			}
		});
	}

	getLocationName(nextProps) {
		const cityName = this.props.locationInfo[0];
		this.state.location[0] = cityName;
		this.getCountryName();
	}

	render() {
		const { location } = this.state;
		return (
			<div className="location">
					<span>{location.join(", ")}</span>
			</div>
		);
	}
}

export default Location;