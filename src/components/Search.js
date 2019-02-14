import React, { Component } from 'react';
import customData from './../city.list.json';

class Search extends Component {
	constructor (props) {
		super(props);

		this.getLocation = this.getLocation.bind(this);
	}

	getLocation(e) {
		const word = e.target.value.toLowerCase();
		const list = customData.filter(function(item) {
			let compare = item.name.toLowerCase().indexOf(word);
										// if(item.name.indexOf(word)) {return item.name;}
									if(compare != -1){
										return item.name;
									}
								});
		// list.forEach(function(item, i, arr) {
		//   console.log(item.name);
		// });

			console.log(e.target.value, list);
	}

	render() {
		const {onShowList} = this.props;
		const searchResult="0"
		return (

			<div className="search-container">
				<button className="btn-close" 
					onClick={onShowList}
				><span>Close</span></button>
				<input className="form-control" onChange={this.getLocation} placeholder="Search place"/>
				<ul className="search-result">{searchResult}</ul>
			</div>
		);
	}
}

export default Search;