import React, { Component } from 'react';
import LocationItem from './LocationItem';
import NavOpener from './NavOpener';
import Search from './Search';

class Drop extends Component {
	constructor (props) {
		super(props);
		this.state = {
			showDrop: false,
			listLocation: []
		}

		this.handleClick = this.handleClick.bind(this);
		this.removeLocation = this.removeLocation.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setListLocation(nextProps);
	}


	setListLocation(nextProps) {

		this.setState({
			listLocation: this.props.listOfPlaces
		});
	}

	removeLocation(id) {
		const arr = this.state.listLocation;
		arr.forEach((item, i)=>{
			if(item.id === +id) {
				this.state.listLocation.splice(i, 1);
			}
		});

		this.setState({
			listLocation: this.state.listLocation
		});
	}

	handleClick () {
		this.setState({showDrop: !this.state.showDrop });
	}

		render() {
			const {onShowDrop, addLocation, listOfPlaces, setCurrentPlace} = this.props;
			const search =  this.state.showDrop ? 
			<Search onShowList={this.handleClick}
							addLocation={addLocation} /> : null;
			return (
				<div className="drop">
				<NavOpener onShowDrop={onShowDrop}/>
					<LocationItem 
					listLocations={this.state.listLocation} 
					listOfPlaces={listOfPlaces}
					removeLocation={this.removeLocation}
					setCurrentPlace={setCurrentPlace} />
						{search}
					<button className="btn-add" 
					onClick={this.handleClick}
					>Add place</button>
				</div>
			);
		}
}

export default Drop;