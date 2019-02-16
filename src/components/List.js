import React, { Component } from 'react';


class Search extends Component {
	render() {
		const places = this.props.list;

		if (places.length) {

		const items = places.map((place, i) => {
			const key = i;
			return <li key={key}>{place}</li>;
		});
			return (<ul className="search-result">{items}</ul>)
		} else {
			return (<div></div>)
		}
	}
}


export default Search;