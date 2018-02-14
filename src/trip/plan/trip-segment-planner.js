import React, {Component} from 'react';

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {ButtonPrimary, ButtonSecondary, ButtonCancel} from '../../ride/Buttons.js';

import SelectableOptions from '../../selectable-options/selectable-options.js';

import TextField from '../../ride/TextField.js';
import TripSegmentModel from './trip-segment.js';
import './trip-segment.css';


function dateIsBefore(d1, d2){
	return d1.getDate() <= d2.getDate() &&
			d1.getMonth() <= d2.getMonth() &&
			d1.getFullYear() <= d2.getFullYear();
}

function disableDatesBefore(thresholdDate) {
	return function(date) {
		return dateIsBefore(date, thresholdDate);
	}
}

class TripSegmentPlanner extends Component {
	constructor(props){
		super(props);
		this.state = {
			segment: this.props.segment || new TripSegmentModel()
		}
		this.refs = {
			dep: this.state.segment.departure,
			dest: this.state.segment.destination
		}
	}

	changeDeparture(value){
		let segment = this.state.segment;
		segment.departure = value;
		this.setState({
			segment: segment
		});
	}

	changeDestination(value){
		let segment = this.state.segment;
		segment.destination = value;
		this.setState({
			segment: segment
		});
	}

	addBefore(){
		this.props.addBefore(this.state.segment.getBefore());
	}

	addAfter(){
		this.props.addAfter(this.state.segment.getAfter());
	}

	changeDepDate(date){
		let segment = this.state.segment;
		segment.depDate = date;
		this.setState({
			segment: segment
		});
	}

	changeDestDate(date){
		let segment = this.state.segment;
		segment.destDate = date;
		this.setState({
			segment: segment
		});
	}

	handleDelete(){
		this.props.onDelete();
	}

	render(){
		let today = new Date();
		let $$dateTime = JSON.stringify(today);
		let $$segment = this.props.segment;
		let $$marginRight = {marginRight : '20px'};

		return (
			<div className='white-block clearfix'>
				<div className='ts-col-half' style={{paddingRight: '10px'}}>
					<div>
						<TextField
							hint='City, Airport, Helipad'
							label='Depart Location'
							value={$$segment.departure}
							onChange={this.changeDeparture.bind(this)}
						/>
						<TextField
							hint={$$dateTime}
							label='Depart Date & Time'
							value={$$segment.depDate}
							onChange={this.changeDepDate.bind(this)}
						/>
					</div>
				</div>
				<div className='ts-col-half' style={{paddingLeft: '10px'}}>
					<div>
						<TextField
							hint='City, Airport, Helipad'
							label='Arrival Location'
							value={$$segment.destination}
							onChange={this.changeDestination.bind(this)}
						/>
						<TextField
							hint={$$dateTime}
							label='Arrival Date & Time'
							value={$$segment.destDate}
							onChange={this.changeDestDate.bind(this)}
						/>
					</div>
				</div>
				
				<div style={{width: '100%', float: 'right', textAlign: 'right', marginTop: '20px'}}>
					<ButtonPrimary style={$$marginRight} onClick={this.addBefore.bind(this)} label='Add Before' />
					<ButtonPrimary style={$$marginRight} onClick={this.addAfter.bind(this)} label='Add After' />
					{this.props.isOnly &&
						<ButtonCancel onClick={this.handleDelete.bind(this)} label='Reset' />
					}
					{!this.props.isOnly &&
						<ButtonCancel onClick={this.handleDelete.bind(this)} label='Delete' />
					}
				</div>
			</div>
		);
	}
}

export default TripSegmentPlanner;