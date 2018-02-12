class TripSegmentModel {
	constructor(props){
		!props && (props = {});
		this.id = Math.random();
		this.departure = props.departure || '';
		this.destination = props.destination || '';
		this.depDate = new Date();
		this.destDate = new Date();
	}

	getBefore(){
		return new TripSegmentModel({destination: this.departure, departure: Math.random()});
	}

	getAfter(){
		return new TripSegmentModel({departure: this.destination, destination: Math.random()});
	}
}

export default TripSegmentModel;