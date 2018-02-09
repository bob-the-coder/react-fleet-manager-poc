import React, {Component} from 'react';

import TripSegmentModel from './trip-segment.js';
import './trip-segment.css';

class TripSegmentPlanner extends Component {
	constructor(props){
		super(props);
		this.state = {
			segment: this.props.segment
		}
	}

	changeDeparture(val){
		let segment = this.state.segment;
		segment.departure = val;
		this.setState({
			segment: segment
		});
	}

	changeDestination(val){
		let segment = this.state.segment;
		segment.destination = val;
		this.setState({
			segment: segment
		});
	}

	getCurrentSegment(){
		let segment = this.state.segment;
		segment.departure = this.refs.dep.value;
		segment.destination = this.refs.dest.value;

		return segment;
	}

	addBefore(){
		this.props.addBefore(this.getCurrentSegment().getBefore());
	}

	addAfter(){
		this.props.addAfter(this.getCurrentSegment().getAfter());
	}

	handleDelete(){
		this.props.onDelete();
	}

	render(){
		let $$segment = this.props.segment;

		return (
			<div className='white-block clearfix'>
				<div className='ts-col-half'>
					<div className='clearfix'>
						<b>{this.props.index} Departure</b>
						<input className='input' ref='dep' defaultValue={$$segment.departure} />
					</div>
					<div className='clearfix'>
						<b>Destination</b>
						<input className='input' ref='dest' defaultValue={$$segment.destination} />
					</div>
				</div>
				<div className='ts-col-half'>
					<div>
						<b>Transport</b>
					</div>
				</div>
				<div style={{textAlign: 'right'}}>
						<button className='btn btn-primary' onClick={this.addBefore.bind(this)}>Add Before</button>
						<button className='btn btn-primary' onClick={this.addAfter.bind(this)}>Add After</button>
					<button className='btn btn-error' onClick={this.handleDelete.bind(this)}>Delete</button>
				</div>
			</div>
		);
	}
}

export default TripSegmentPlanner;