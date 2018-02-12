import React, {Component} from 'react';

import './checkbox.css';

class Checkbox extends Component {
	constructor(props){
		super(props);
		this.state = {
			checked: this.props.checked
		}
	}

	handleClick(){
		this.props.toggleCheck(!this.props.checked);
		this.setState({
			checked: !this.state.checked
		});
	}

	render(){
		let $className = 'checkbox' + (this.state.checked ? ' checked' : '');
		return (
			<div className={$className} onClick={this.handleClick.bind(this)}>
				<label>{this.props.label}</label>
			</div>
		);
	}
}

export default Checkbox;