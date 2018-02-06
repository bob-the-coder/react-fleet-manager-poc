import React, {Component} from 'react';
import InquiryLeg from './InquiryLeg.js';

class InquiryForm extends Component {
	constructor(){
		super();
		this.state = {
			legs: []
		};
	}

	addLeg(){
		let legs = this.state.legs;
		legs.push({id: Math.random()});
		this.setState({
			legs: legs
		});
	}

	render(){
		let $legs = this.state.legs.map(l => <InquiryLeg key={l.id} canAdd={false} />);
		return (
			<div>
				{$legs}
				<InquiryLeg canAdd={true} addLeg={this.addLeg.bind(this)}/>
			</div>
		);
	}
}

export default InquiryForm;