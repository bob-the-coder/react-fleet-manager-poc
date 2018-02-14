import React, {Component} from 'react';
import './theme.css';

export default class TextField extends Component{
	onChange(event){
		this.props.onChange && this.props.onChange(event.target.value);
	}

	clear(){
		this.props.onChange && this.props.onChange('');
	}

	render() {
		return (
			<div className='ride-input-wrapper'>
				<label>{this.props.label}</label>
				<input 
					type={this.props.type || 'text'} 
					className='ride-input' 
					placeholder={this.props.hint}
					value={this.props.value}
					onChange={this.onChange.bind(this)} />
				<div className='ride-input-clear' onClick={this.clear.bind(this)} title='Clear'>&times;</div>
			</div>
		);
	}
}