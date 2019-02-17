import React, { Component } from 'react';
import List from './List';

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
		import("./../list.json")
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
		const word = e.target.value.toUpperCase();
		const obj = this.state.customData;
		const tempArr = [];
		let counter = 0;

		if (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) {
			const arr = obj[word.charAt(0)];
			for (let i=0; i < arr.length; i++) {

				if (arr[i].name.toUpperCase().indexOf(word) === 0 ) {
					tempArr.push({"name":arr[i].name, "country":arr[i].country});
					this.setState({list:tempArr});
					counter += 1;
				}
				if (counter >= 10) {
					break;
				}
			}
		} else {
			this.setState({list:[]});
		}
	}

	render() {
		const {onShowList} = this.props;

		return (

			<div className="search-container">
				<button className="btn-close" 
					onClick={onShowList}
				><span>Close</span></button>
				<input className="form-control" onKeyUp={this.getLocation} placeholder="Search place"/>
				<List list={this.state.list} onShowList={onShowList}/>
			</div>
		);
	}
}

export default Search;