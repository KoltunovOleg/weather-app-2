import React, { Component } from 'react';

class Drop extends Component {
	constructor (props) {
		super(props);

		this.state = {
			showDrop: false
		};
	}

		render() {
			const {showDrop} = this.props;
			const classHidden = showDrop ? "" : "hidden";
			
			return (
				<div className={`drop ${classHidden}`}>
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
					<button className="btn-add">Add place</button>
				</div>
				);
		}
}

export default Drop;