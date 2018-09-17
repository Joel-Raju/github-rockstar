import React, { Component } from 'react';

class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {inputValue: ''};

		this.onSearchTermChanged = this.onSearchTermChanged.bind(this);
	}

	componentDidMount() {

	}

	componentWillReceiveProps() {

	}

	// shouldComponentUpdate() {

	// }

	onSearchTermChanged(event) {
		this.setState({inputValue: event.target.value});
	}

	render() {
		const { inputValue } = this.state;
		return (<div>
			<input
				type="text"
				value={inputValue}
				onChange={this.onSearchTermChanged} />
			<datalist>
			</datalist>	
			</div>	
		);
	}
}

export default Search;