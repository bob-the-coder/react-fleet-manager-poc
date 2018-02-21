var faker = require('faker/locale/en');

let fakeLocation = () => faker.address.city() + ', ' + faker.address.country();

class TripSegmentModel {
	constructor(props){
		!props && (props = {});
		this.id = Math.random();
		this.departure = props.departure || fakeLocation();
		this.destination = props.destination || fakeLocation();
		this.depDate = new Date();
		this.destDate = new Date();
		this.pax = (Math.ceil(faker.random.number()) % 6) + 1;
	}

	getBefore(){
		return new TripSegmentModel({destination: this.departure, departure: fakeLocation()});
	}

	getAfter(){
		return new TripSegmentModel({departure: this.destination, destination: fakeLocation()});
	}
}

export default TripSegmentModel;