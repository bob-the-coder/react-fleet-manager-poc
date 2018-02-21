import TripSegmentModel from './trip-segment.js';
var faker = require('faker/locale/en');

class TripModel {
	constructor(props){
		!props && (props = {});

		this.id = props.id || faker.random.uuid();
		this.number = props.number || Math.ceil(faker.random.number());
		this.offers = Math.ceil(faker.random.number() * 34) % 20 + 1;

		let nsegments = Math.ceil(faker.random.number() * 34) % 5;
		this.segments = [new TripSegmentModel()];

		while(nsegments > 0){
			let last = this.segments[this.segments.length - 1];
			this.segments.push(new TripSegmentModel({departure: last.destination}));
			nsegments--;
		}
	}
}

export default TripModel;