import React, { Component } from 'react';

class LocationItem extends Component {
	constructor (props) {
		super(props);

		this.state = {
			listLocations: this.props.listLocations
		}

		this.handleClick = this.handleClick.bind(this);
		this.chooseLocation = this.chooseLocation.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			listLocations: this.props.listLocations
		});
	}

	handleClick(e) {
		const parentDiv = e.target.parentNode;
		this.props.removeLocation(parentDiv.dataset.id);
	}

	chooseLocation(e) {
		const elem = e.target;
		if (elem.classList.contains('location-item')) {
			console.log(e.target);
			this.props.setCurrentPlace()
		}
	}
	
	render() {
		const {listLocations} = this.state;
		if (listLocations.length) {
			const items = listLocations.map((place, i) => {
				const key = place.id;
				return (
					<div className="location-item" data-id={key} key={key}>
						<button className="btn-delete" onClick={this.handleClick}>Delete</button>
						<div className="location-info">
							<span className="place">{place.name}</span>
							<div className="temp"><span>{Math.round(place.dataArr.main.temp)} &ordm;C</span></div>
						</div>
					</div>
				);
			});
			return (
				<div className="list-location" onClick={this.chooseLocation}>{items}</div>
			)
		} else {
			return false;
		}
	}
}

export default LocationItem;