import React, {Component} from 'react';
import './theme.css';

export class TableControls extends Component {
	render(){
		return (
			<div className='white-block table-controls'>
				{this.props.children}
			</div>
		);
	}
}

export class ControlGroup extends Component {
	render(){
		return (
			<div className='control-group'>
				{this.props.label &&
					<label className='control-group-label'>{this.props.label}</label>
				}
				{this.props.children}
			</div>
		);
	}
}