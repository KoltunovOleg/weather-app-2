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
		const elem = e.target,
		parent = elem.closest('.location-item'),
		parentWrapper = elem.closest('.list-location');

		if (parent) {
			const activeClass = parentWrapper.getElementsByClassName("active");
			if(activeClass.length) {
				const arrFromList = [].slice.call(activeClass);
				arrFromList.forEach(item => {
					item.classList.remove("active");
				});
			}
			parent.classList.add("active");
			this.props.setCurrentPlace(parent.dataset.id);
		}
	}
	
	render() {
		const {listLocations} = this.state;
		if (listLocations.length) {
			const items = listLocations.map((place, i) => {
				const key = place.id;
				return (
					<div className="location-item" data-id={key} key={key}>
						<button className="btn-delete btn-close" onClick={this.handleClick}>Delete</button>
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