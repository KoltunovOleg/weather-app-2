import React, { Component } from 'react';
import Drop from './Drop';
import NavOpener from './NavOpener';
import '../styles/Nav.css';

class Nav extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		const {onShowDrop} = this.props;
		return (
			<div className="navigation">
			<NavOpener onShowDrop={onShowDrop}/>
			<Drop onShowDrop={onShowDrop}/>
			</div>
			);
	}
}


export default Nav;