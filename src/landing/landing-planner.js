import React, {Component} from 'react';
import {ButtonSecondary} from '../ride/Buttons.js'
import TripSegment from 'trip/trip-segment.js'
var faker = require('faker/locale/en');

let fakeLocation = () => faker.address.city() + ', ' + faker.address.country();

export default class LandingPlanner extends Component {
	constructor(){
		super();

		this.state = {
			legs: [ new TripSegment() ]
		};
	}

	addLeg(){
		let legs = this.state.legs;
		legs.push(legs[legs.length - 1].getAfter());

		this.setState({
			legs: legs
		});
	}

	submitTrip(){
		window.location = '/#/trip/mine';
	}

	renderTripLeg(leg, key){
		let loc1 = leg.departure;
		let loc2 = leg.destination;

		return (
			<div className='trip-leg' key={key}>
				<input className='leg-input' defaultValue={loc1} onChange={a => null}/>
				<input className='leg-input' defaultValue={loc2} onChange={a => null}/>
				<select className='leg-input small'>
					<option>Departure</option>
					<option>Arrival</option>
				</select>
				<input className='leg-input' value='2018-03-05 17:30' onChange={a => null}/>
				<input className='leg-input tiny' value='2' onChange={a => null}/>
				<div className='cross-button'>&times;</div>
			</div>
		);
	}

	render() {
		let $legs = this.state.legs.map(leg => this.renderTripLeg(leg, Math.random()));

		return (
			<div className='trip-legs'>
				{$legs}
				<ButtonSecondary label='Add Leg' onClick={this.addLeg.bind(this)} />
				<ButtonSecondary label='Find Trips' onClick={this.submitTrip.bind(this)} />
			</div>
		);
	}
}