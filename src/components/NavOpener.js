import React, { Component } from 'react';

class NavOpener extends Component {
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
			<a className="nav-opener"
			href="#"
			onClick={this.handleClick} >
				<span>Menu</span>
			</a>
			)
	}
}

export default NavOpener;