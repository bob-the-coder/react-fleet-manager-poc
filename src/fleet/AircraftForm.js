import React, {Component} from 'react';
import {Tabs, Tab} from 'ride/Tabs.js';
import TextField from 'ride/TextField.js';

export default class AircraftForm extends Component {
	render() {
		return (
			<Tabs panels={['Base Data', 'Fees & Taxes', 'Schedule']}>
				<Tab panel='Base Data'>
					<h1>Panel 1</h1>
					<TextField label='some text 1' />
				</Tab>
				<Tab panel='Fees & Taxes'>
					<h1>Panel 2</h1>
					<TextField label='some text 2' />
				</Tab>
				<Tab panel='Schedule'>
					<h1>Panel 3</h1>
					<TextField label='some text 3' />
				</Tab>
			</Tabs>
		);
	}
}