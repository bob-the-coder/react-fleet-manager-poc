import React, {Component} from 'react';
import './landing.css';

import LandingLogin from './LandingLogin.js';

export default class LandingPage extends Component {
	constructor(){
		super();
		if(localStorage.getItem("cookie")){
			window.location = '/#/trip/mine';
		}
	}

	render(){
		return (
			<div style={{position: 'fixed', marginTop: '50px', left: 0, width: '100vw', height: 'calc(100vh - 50px)'}}>
				<div alt='' className='landing-bg'></div>
				<div className='landing-body'>
					<LandingLogin />
				</div>
			</div>
		);
	}
}