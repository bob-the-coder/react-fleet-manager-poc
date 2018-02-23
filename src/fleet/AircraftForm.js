import React, {Component} from 'react';
import {Tabs, Tab} from 'ride/Tabs.js';
import TextField from 'ride/TextField.js';

export default class AircraftForm extends Component {
	render() {
		return (
			<Tabs panels={['Label 1', 'Label 2', 'Label 3']} activePanel='Label 2'>
				<Tab panel='Label 1'>
					<h1>Panel 1</h1>
					<TextField label='some text 1' />
				</Tab>
				<Tab panel='Label 2'>
					<h1>Panel 2</h1>
					<TextField label='some text 2' />
				</Tab>
				<Tab panel='Label 3'>
					<h1>Panel 3</h1>
					<TextField label='some text 3' />
				</Tab>
			</Tabs>
		);
	}
}