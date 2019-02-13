import React, { Component } from 'react';
import Drop from './Drop';
import '../styles/Nav.css';

class Nav extends Component {
	constructor (props) {
		super(props);

		this.state = {
			showDrop: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick (e) {
		e.preventDefault();
		this.setState({showDrop: !this.state.showDrop });
	}


	render() {
		const {showDrop} = this.state;
		return (
			<div className="navigation">
			<a className="nav-opener"
			href="#"
			onClick={this.handleClick} >
			<span>Menu</span>
			</a>
			<Drop showDrop={showDrop} />
			</div>
			);
	}
}


export default Nav;