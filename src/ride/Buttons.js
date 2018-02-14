import React, {Component} from 'react';
import './theme.css';

class Button extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return (
			<button style={this.props.style} className={'ride-btn btn-' + this.state.buttonType} onClick={this.props.onClick}>{this.props.label}</button>
		);
	}
}

export class ButtonPrimary extends Button {
	constructor(props){
		super(props);
		this.state = {
			buttonType: 'primary'
		}
	}
}

export class ButtonSecondary extends Button {
	constructor(props){
		super(props);
		this.state = {
			buttonType: 'secondary'
		}
	}
}

export class ButtonCancel extends Button {
	constructor(props){
		super(props);
		this.state = {
			buttonType: 'cancel'
		}
	}
}