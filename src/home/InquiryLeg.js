import React, {Component} from 'react';
import './css/inquiry-leg.css';

class InquiryLeg extends Component{

	handleAddLeg(){
		this.props.addLeg();
	}

	render(){
		let datePlaceHolder = new Date();
		let depOptions = (['Leave At', 'Arrive At']).map(o => <option key={Math.random()} value={o.replace(/\s/g, '')}>{o}</option>);
		let optionalButton;
		if(this.props.canAdd){
			optionalButton = <button onClick={this.handleAddLeg.bind(this)} className='btn primary'>Add</button>;
		}
		
		return (
			<div className='i-leg white-block'>
				<div>
					<span className='inq-col-b'>
						<h4>Origin</h4>
						<input type='text' placeholder='Leave from' />
					</span>
					<span className='inq-col-b'>
						<h4>Destination</h4>
						<input type='text' placeholder='Go To' />
					</span>
					<span className='inq-col-b'>
						<div><h4>Itinerary</h4></div>
						<select>
							{depOptions}
						</select>
						<input type='text' placeholder={datePlaceHolder} />
					</span>
				</div>
				<div>
					<div className='inq-col'>
						<h4>Transport</h4>
					</div>
					<div className='inq-col'>
						<h4>Passengers</h4>
					</div>
					<div className='inq-col'>
						<h4>Preferences</h4>
					</div>
				</div>
				<div>
					{optionalButton}
				</div>
			</div>
		);
	}
}

export default InquiryLeg;