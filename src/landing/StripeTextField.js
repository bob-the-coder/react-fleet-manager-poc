import React, {Component} from 'react';
import './stripe-input.css';

export default class StripeTextField extends Component {
	constructor(props){
		super(props);
		this.state = {
			type: props.type,
			hasValue: !!props.value,
			value: props.value
		}
	}

	onChange(event){
		let value = event.target.value;
		this.props.onChange && this.props.onChange(value);

		this.setState({
			hasValue: !!value,
			value: value
		});
	}

	handleFocus(){
		this.setState({ hasValue: true });
	}

	handleBlur(){
		this.setState({ hasValue: false || !!this.state.value });
	}

	render(){
		return (
			<div className={'stripe-input' + (this.state.hasValue ? ' has-value' : '')}>
				<label>{this.props.label}</label>
				<input 
					onFocus={this.handleFocus.bind(this)}
					onBlur={this.handleBlur.bind(this)}
					placeholder={this.props.hint}
					type={this.state.type || 'text'} 
					value={this.props.value}
					onChange={this.onChange.bind(this)} />
				<div className='stripe'></div>
			</div>
		);
	}
}