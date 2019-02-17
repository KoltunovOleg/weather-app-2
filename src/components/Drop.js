import React, { Component } from 'react';
import LocationItem from './LocationItem';
import NavOpener from './NavOpener';
import Search from './Search';

class Drop extends Component {
	constructor (props) {
		super(props);
		this.state = {
			showDrop: false,
			listLocation: [
			{ "name": "Kharkiv",
				"country": "ua"
			},
			{ "name": "Maroco",
				"country": "ma"
			}
			]
		}

		this.handleClick = this.handleClick.bind(this);
		this.getAddLocation = this.getAddLocation.bind(this);
	}

	handleClick () {
		this.setState({showDrop: !this.state.showDrop });
	}

	getAddLocation(list) {
		const obj = {
			"name": list[0],
			"country": list[1]
		}

		this.setState({
			listLocation: this.state.listLocation.push(obj) 
		});
	}

		render() {
			const {onShowDrop} = this.props;
			const search =  this.state.showDrop ? 
			<Search onShowList={this.handleClick}
							getAddLocation={this.getAddLocation}
			/>: null;
			return (
				<div className="drop">
				<NavOpener onShowDrop={onShowDrop}/>
					<LocationItem listLocation={this.state.listLocation} />
						{search}
					<button className="btn-add" 
					onClick={this.handleClick}
					>Add place</button>
				</div>
			);
		}
}

export default Drop;