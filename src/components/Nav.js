import React, { Component } from 'react';
import Drop from './Drop';
import NavOpener from './NavOpener';
import '../styles/Nav.css';

class Nav extends Component {

	render() {
		const {onShowDrop, addLocation, listOfPlaces, setCurrentPlace} = this.props;
		return (
			<div className="navigation">
			<NavOpener onShowDrop={onShowDrop}/>
			<Drop 
      onShowDrop={onShowDrop} 
      addLocation={addLocation} 
      listOfPlaces={listOfPlaces}
      setCurrentPlace={setCurrentPlace}
      />
			</div>
		);
	}
}


export default Nav;