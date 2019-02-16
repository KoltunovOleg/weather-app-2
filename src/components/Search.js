import React, { Component } from 'react';
import List from './List';
// import customData from './../city.list.json';

class Search extends Component {
	constructor (props) {
		super(props);
		this.state = {
			customData: false,
			value: "",
			list: []
		}

		this.getLocation = this.getLocation.bind(this);
	}

	componentDidMount() {
		import("./../city.list.json")
			// .then(res => res.json())
			.then(
				(result) => {
					// console.log(JSON.stringify(result));
					this.setState({
						customData: result.default
					});
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					console.log(error);
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	getLocation(e) {
		const word = e.target.value.toLowerCase();
		const arr = this.state.customData;
		let counter = 0;
		let tempArr = [];
		for (let i=0; i < arr.length; i++) {
			if (arr[i].name.toLowerCase().indexOf(word) !== -1 ) {
				tempArr.push(arr[i].name);
				this.setState({list:tempArr});
				counter += 1;
			}
			if (counter >= 10) {
				break;
			}
		}
		// const list = this.state.customData.filter(function(item) {
		// 	let compare = item.name.toLowerCase().indexOf(word);
		// 	if (compare != -1) {
		// 		return item.name;
		// 	}
		// });
		// this.setState({list:list});
		// list.forEach(function(item, i, arr) {
		//   console.log(item.name);
		// });

		// for (var i = list.length - 1; i >= 0; i--) {
		// 	console.log(list[i]);
		// }

			console.log(tempArr);
	}

	render() {
		const {onShowList} = this.props;
					// {list} = this.state;

					// console.log(list);
		return (

			<div className="search-container">
				<button className="btn-close" 
					onClick={onShowList}
				><span>Close</span></button>
				<input className="form-control" onKeyUp={this.getLocation} placeholder="Search place"/>
				<List list={this.state.list}/>
				
			</div>
		);
	}
}

export default Search;