import React from 'react';
import AuthenticatedComponent from 'ride/AuthenticatedComponent.js';
import { Route } from "react-router-dom";

import Sandbox from 'ride/Sandbox.js';
import TripPlanner from 'trip/plan/trip-planner.js';
import TripList from 'trip/list/trip-list.js';
import FleetTable from 'fleet/FleetTable.js';
import AircraftForm from 'fleet/AircraftForm.js';

export default class AppBody extends AuthenticatedComponent {
	render() {
		this.checkAuth();

		return (
			<div>
				<Route exact path='/sandbox' component={Sandbox} />

				<Route exact path='/fleet' component={FleetTable} />
				<Route exact path='/fleet/add' component={AircraftForm} />

				<Route exact path='/trip/plan' component={TripPlanner} />

				<Route exact path='/trip/mine' component={TripList} />
				<Route exact path='/trip/find' component={TripList} />
			</div>
		);
	}
}