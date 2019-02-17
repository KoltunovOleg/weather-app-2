import React, { Component } from 'react';


class Search extends Component {
	constructor (props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		console.log(e.target.textContent.split(', '));
		if(e.target.className === "item-result") {
			// this.props.onShowList();
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
			return (<div></div>)
		}
	}
}


export default Search;