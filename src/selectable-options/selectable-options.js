import React, {Component} from 'react';

import Checkbox from '../checkbox/checkbox.js';

class SelectableOptions extends Component{
	constructor(props){
		super(props);

		let options = ['Train', 'Plane', 'Helicopter', 'Boat', 'Yacht'];

		this.state = {
			options: options,
			selected: options.map(o => null)
		}
	}

	toggle(option, index, checked){
		let options = this.state.options;
		let selected = this.state.selected;

		if(!checked){
			selected[index] = null;
		}else{
			selected[index] = option;
		}

		this.setState({
			options: options,
			selected: selected
		});
	}

	renderOptions(){
		let options = this.state.options;
		let selected = this.state.selected;

		return options.map((option, index) => {
			let key = Math.random();
			let checked = selected.indexOf(option) >= 0;
			return (<Checkbox key={key} label={option} checked={checked} toggleCheck={this.toggle.bind(this, option, index)} />);
			}
		);
	}

	render(){
		let $options = this.renderOptions();
		return (
			<div className='border-block clearfix'>
				{$options}
			</div>
		);
	}
}

export default SelectableOptions;