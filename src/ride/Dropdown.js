import React, {Component} from 'react';
import './dropdown.css';

export default class Dropdown extends Component {
	constructor(props){
		super(props);

		this.state = {
			value: props.value,
			aliasFunc: props.alias || (x => JSON.stringify(x)),
			options: props.options || []
		}
	}

	blur(event) {
		event.target.parentElement.parentElement.blur();
	}

	handleClick(event, option) {
		this.setState({
			value: option
		});
		
		if(!this.props.onClick) {
			this.blur(event);
			return;
		}
		this.props.onClick(option);
		this.blur(event);
	}

	renderOption(option){
		let $label = this.state.aliasFunc(option);
		if(this.props.template){
			$label = this.props.template(option);
		}

		return (
			<li onClick={event => this.handleClick(event, option)} key={Math.random()}>
				{$label}
			</li>
		);
	}

	render() {
		let $alias = this.state.aliasFunc(this.state.value);
		let $options = this.state.options.map(option => this.renderOption(option));

		return (
			<div className='ride-input-wrapper'>
				<label>{this.props.label}</label>
				<div className='dropdown' tabIndex={0}>
					<label className='ride-input'>{$alias}</label>
					<ul className='white-block'>{$options}</ul>
				</div>
			</div>
		);
	}
}