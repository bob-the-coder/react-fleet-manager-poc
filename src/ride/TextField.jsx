import React, {Component} from 'react';
import './theme.css';
import Theme from './Theme.js';

export default class TextField extends Component {
	constructor(props){
		super(props);

	}

	render(){
		return (
			<div>
				<label style={{fontSize: '13px'}}>{this.props.label}</label>
				<input type='text' placeholder={this.props.hint}/>
			</div>
		);
	}
}