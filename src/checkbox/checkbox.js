import React, {Component} from 'react';

import './checkbox.css';

class Checkbox extends Component {
	handleClick(){
		this.props.toggleCheck(!this.props.checked);
	}

	render(){
		let $className = 'checkbox' + (this.props.checked ? ' checked' : '');
		return (
			<div className={$className} onClick={this.handleClick.bind(this)}>
				<label>{this.props.label}</label>
			</div>
		);
	}
}

export default Checkbox;