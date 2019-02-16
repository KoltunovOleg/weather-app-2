import React, { Component } from 'react';

class LocationItem extends Component {
	
	render() {
		return (
			<div className="list-location">
				<div className="location-item current">
					<button className="btn-delete">Delete</button>
					<div className="location-info">
						<span className="place">Kharkiv</span>
						<span className="temp">10 &ordm;C</span>
					</div>
				</div>
				<div className="location-item">
					<button className="btn-delete">Delete</button>
					<div className="location-info">
						<span className="place">Maroco</span>
						<span className="temp">22 &ordm;C</span>
					</div>
				</div>
			</div>
		)
	}
}

export default LocationItem;