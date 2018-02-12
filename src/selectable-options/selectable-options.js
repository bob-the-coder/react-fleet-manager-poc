import React, {Component} from 'react';

import Toggle from 'material-ui/Toggle';
import {List, ListItem} from 'material-ui/List';

import Checkbox from '../checkbox/checkbox.js';

class SelectableOptions extends Component{
	static selected = [];

	constructor(props){
		super(props);

		let options = ['Train', 'Plane' ];

		this.state = {
			options: options,
			selected: this.props.selected || options.map(o => null)
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
	}

	renderOptions(){
		let options = this.state.options;
		let selected = this.state.selected;

		return options.map((option, index) => {
			let key = Math.random();
			let checked = selected.indexOf(option) >= 0;
			return (
				<ListItem
					onClick={this.toggle.bind(this, option, index)}>
				<Toggle
					label={option}
					defaultToggled={checked}
				/>
				</ListItem>
			);
			}
		);
	}

	render(){
		let $options = this.renderOptions();
		return (
			<List>
				{$options}
			</List>
		);
	}
}

export default SelectableOptions;