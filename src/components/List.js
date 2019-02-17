import React, { Component } from 'react';


class Search extends Component {
	constructor (props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		if(e.target.className === "item-result") {
			this.props.onShowList();
			this.props.getAddLocation(e.target.textContent.split(', '));
		}

	}

	render() {
		const places = this.props.list;

		if (places.length) {

		const items = places.map((place, i) => {
			const key = i;
			return <li className="item-result" key={key}>{place.name}, {place.country}</li>;
		});
			return (<ul className="search-result" onClick={this.handleClick}>{items}</ul>)
		} else {
			return false;
		}
	}
}


export default Search;