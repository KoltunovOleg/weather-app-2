import React, { Component } from 'react';
import LocationItem from './LocationItem';
import NavOpener from './NavOpener';
import Search from './Search';

class Drop extends Component {
	constructor (props) {
		super(props);
		this.state = {
			showDrop: false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		this.setState({showDrop: !this.state.showDrop });
	}

		render() {
			const {onShowDrop} = this.props;
			const search =  this.state.showDrop ? <Search onShowList={this.handleClick}/>: null;
			return (
				<div className="drop">
				<NavOpener onShowDrop={onShowDrop}/>
					<LocationItem />
						{search}
					<button className="btn-add" 
					onClick={this.handleClick}
					>Add place</button>
				</div>
			);
		}
}

export default Drop;