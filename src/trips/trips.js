import React, {Component} from 'react';

class TripTable extends Component{
	constructor(){
		super();
		this.state = {
			trips: [
				{dep: 'SimCity', dest: 'Tuchanka', date: 'Depart 22 Mar \'18'},
				{dep: 'Tuchanka', dest: 'Washington DC', date: 'Arrive 24 Mar \'18'},
				{dep: 'New York', dest: 'Paris', date: 'Arrive 1 Apr \'18'},
				{dep: 'Paris', dest: 'Berlin', date: 'Depart 4 Apr \'18'},
				{dep: 'Minsk', dest: 'SimCity', date: 'Depart 18 Jul \'18'},
			]
		}
	}

	render(){
		let $heads = ['Origin', 'Destination', 'Itinerary'].map(
			h => <th key={Math.random()}>{h}</th>);

		let $rows = this.state.trips.map(
			t => <tr key={Math.random()}>
					<td>{t.dep}</td>
					<td>{t.dest}</td>
					<td>{t.date}</td>
				 </tr>
			);

		return (
			<table className='white-block table'>
				<thead><tr>{$heads}</tr></thead>
				<tbody>{$rows}</tbody>
			</table>
		);
	}
}

export default TripTable;