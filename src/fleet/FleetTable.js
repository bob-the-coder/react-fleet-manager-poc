import React, {Component} from 'react';
import {ButtonPrimary, ButtonSecondary, ButtonCancel} from 'ride/Buttons.js';
import {TableControls, ControlGroup} from 'ride/TableControls.js';
import TextField from 'ride/TextField.js';
import Dropdown from 'ride/Dropdown.js';

import Aircraft from './Aircraft.js';
var faker = require('faker/locale/en');

let fleet = [];
for(var i = 0; i < 10; i++){
	fleet.push(new Aircraft());
}

export default class FleetTable extends Component {
	renderAircraft(aircraft:Aircraft, index) {
		return (
			<tr key={Math.random()}>
				<td>{aircraft.registration}</td>
				<td>{aircraft.name}</td>
				<td>{aircraft.category}</td>
				<td>{aircraft.seats}</td>
			</tr>
		);
	}

	renderAircraftOptions(aircraft:Aircraft){
		return (
			<tr className='options-row' key={faker.random.uuid()}>
				<td colSpan={4}>
					<ButtonPrimary label={'Edit'} />
					<ButtonSecondary label='Duplicate' />
					<ButtonSecondary label='View Timeline' />
					<ButtonCancel label='Delete' />
				</td>
			</tr>
		);
	}

	addAircraft(){
		window.location = '/#/fleet/add';
	}

	render() {
		let $fleet = []
		for(let i = 0; i < 10; i++){
			$fleet.push(this.renderAircraft(fleet[i], i));
			$fleet.push(this.renderAircraftOptions(fleet[i]));
		}

		return (
			<div>
				<TableControls>
					<ControlGroup>
						<TextField label='Registration'/>
						<TextField label='Type'/>
						<Dropdown label='Category' alias={x => x} options={[1,2,3,4]} value={1}/>
						<ButtonSecondary label='Search' />
					</ControlGroup>
					<ControlGroup>
						<ButtonPrimary label='Add Aircraft' onClick={this.addAircraft.bind(this)}/>
					</ControlGroup>
				</TableControls>
				<div className='white-block'>
					<table>
						<thead>
							<tr>
								<th>Registration</th>
								<th>Type</th>
								<th>Category</th>
								<th>Pax Seats</th>
							</tr>
						</thead>
						<tbody>
							{$fleet}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}