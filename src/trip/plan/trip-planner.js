import React, {Component} from 'react';

import TripSegmentModel from './trip-segment.js';
import TripSegmentPlanner from './trip-segment-planner.js';

class TripPlanner extends Component {
	constructor(){
		super();
		this.state = {
			segments: [ new TripSegmentModel() ]
		}
	}

	addSegment(index, newSegment){
		let segments = this.state.segments.slice();
		segments.splice(index, 0, newSegment);

		this.setState({
			segments: segments
		});
	}

	deleteSegment(index){
		let segments = this.state.segments.slice();
		if(segments.length === 1){
			segments = [ new TripSegmentModel()];
		}else{
			segments.splice(index, 1);
		}
		this.setState({
			segments: segments
		});
	}

	render(){
		let $$segments = this.state.segments;
		
		let $segments = $$segments.map((segment, index) => {
			return (
			<TripSegmentPlanner 
				key={segment.id} 
				segment={segment}
				index={index}
				addBefore={this.addSegment.bind(this, index)}
				addAfter={this.addSegment.bind(this, index + 1)}
				onDelete={this.deleteSegment.bind(this, index)}
			/>);
		})

		return (
			<div>
				{$segments}
			</div>
		);
	}
}

export default TripPlanner;