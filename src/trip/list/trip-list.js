import React, {Component} from 'react';
import TripModel from '../trip.js';
import {ButtonPrimary, ButtonSecondary, ButtonCancel} from 'ride/Buttons.js';
var faker = require('faker/locale/en');

export default class TripList extends Component {
	renderSegment(trip, segment, index) {
		let $number;
		if(index === 0){
			$number = <td rowSpan={trip.segments.length}>{trip.number}</td>;
		}

		return (
			<tr key={Math.random()}>
				{$number}
				<td>{segment.departure}</td>
				<td>{JSON.stringify(segment.depDate)}</td>
				<td>{segment.destination}</td>
				<td>{JSON.stringify(segment.destDate)}</td>
				<td>{segment.pax}</td>
			</tr>
		);
	}

	renderTripOptions(trip){
		return (
			<tr className='options-row' key={faker.random.uuid()}>
				<td colSpan={6}>
					<ButtonPrimary label={'View ' + trip.offers + ' offer' + (trip.offers > 1 ? 's' : '')} />
					<ButtonSecondary label='View Trip' />
					<ButtonSecondary label='Options' />
					<ButtonCancel label='Cancel Trip' />
				</td>
			</tr>
		);
	}

	render() {
		let trips = [];
		for(let i = 0; i < 10; i++) trips.push(new TripModel());

		let $trips = [];
		for(let i = 0; i < 10; i++){
			for(let j = 0; j < trips[i].segments.length; j++){
				$trips.push(this.renderSegment(trips[i], trips[i].segments[j], j));
			}
			$trips.push(this.renderTripOptions(trips[i]));
		}

		return (
			<div className='white-block'>
				<table>
					<thead>
						<tr>
							<th>Number</th>
							<th>Departure</th>
							<th>Dep Date</th>
							<th>Destination</th>
							<th>Dest Date</th>
							<th>Pax</th>
						</tr>
					</thead>
					<tbody>
						{$trips}
					</tbody>
				</table>
			</div>
		);
	}
}
