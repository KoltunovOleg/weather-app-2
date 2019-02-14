import React, { Component } from 'react';
import Drop from './Drop';
import '../styles/Nav.css';

class Nav extends Component {
	constructor (props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick (e) {
		e.preventDefault();
		this.props.onShowDrop();
	}

	render() {
		return (
			<div className="navigation">
			<a className="nav-opener"
			href="#"
			onClick={this.handleClick} >
			<span>Menu</span>
			</a>
			<Drop/>
			</div>
			);
	}
}


export default Nav;