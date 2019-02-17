import React, { Component } from 'react';

class LocationItem extends Component {
	constructor (props) {
		super(props);

		this.state = {
			listLocation: this.props.listLocation
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		const parentDiv = e.target.parentNode;
		parentDiv.remove();
	}
	
	render() {
		const {listLocation} = this.state;
		if (listLocation.length) {
			const items = listLocation.map((place, i) => {
				const key = i;
				return (
					<div className="location-item" key={key}>
						<button className="btn-delete" onClick={this.handleClick}>Delete</button>
						<div className="location-info">
							<span className="place">{place.name}</span>
							<span className="temp">10 &ordm;C</span>
						</div>
					</div>
				);
			});
			return (
				<div className="list-location">{items}</div>
			)
		} else {
			return false;
		}
	}
}

export default LocationItem;