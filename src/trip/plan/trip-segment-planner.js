import React, {Component} from 'react';

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

import SelectableOptions from '../../selectable-options/selectable-options.js';

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
	}

	changeDeparture(event){
		let segment = this.state.segment;
		segment.departure = event.target.value;
		this.setState({
			segment: segment
		});
	}

	changeDestination(event){
		let segment = this.state.segment;
		segment.destination = event.target.value;
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

	changeDepDate(n, date){
		let segment = this.state.segment;
		segment.depDate = date;
		this.setState({
			segment: segment
		});
	}

	changeDestDate(n, date){
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
			<Paper zDepth={0} className='white-block clearfix'>
				<div className='ts-col-half'>
					<div>
						<Subheader style={{padding: 0}}>Departure</Subheader>
						<TextField
							hintText='City, Airport, Helipad'
							floatingLabelText='Depart Location'
							value={$$segment.departure}
							onChange={this.changeDeparture.bind(this)}
						/>
						<DatePicker 
							hintText={$$dateTime}
							mode="landscape"
							shouldDisableDate={disableDatesBefore(today)}
							onChange={this.changeDepDate.bind(this)}
							value={$$segment.depDate}
							floatingLabelText='Depart Date & Time'
						/>
					</div>
					<div>
						<Subheader style={{padding: 0}}>Destination</Subheader>
						<TextField
							hintText='City, Airport, Helipad'
							floatingLabelText='Arrival Location'
							value={$$segment.destination}
							onChange={this.changeDestination.bind(this)}
						/>
						<DatePicker 
							hintText={$$dateTime}
							mode="landscape"
							shouldDisableDate={disableDatesBefore($$segment.depDate || today)}
							onChange={this.changeDestDate.bind(this)}
							value={$$segment.destDate}
							floatingLabelText='Arrival Date & Time'
						/>
					</div>
				</div>
				<div className='ts-col-half'>
					<div>
						<Subheader>Transport Options</Subheader>
						<SelectableOptions />
					</div>
				</div>
				<div style={{textAlign: 'right'}}>
					<RaisedButton style={$$marginRight} primary={true} onClick={this.addBefore.bind(this)} label='Add Before' />
					<RaisedButton style={$$marginRight} primary={true} onClick={this.addAfter.bind(this)} label='Add After' />
					{this.props.isOnly &&
						<RaisedButton primary={true} onClick={this.handleDelete.bind(this)} label='Reset' />
					}
					{!this.props.isOnly &&
						<RaisedButton primary={true} onClick={this.handleDelete.bind(this)} label='Delete' />
					}
				</div>
			</Paper>
		);
	}
}

export default TripSegmentPlanner;