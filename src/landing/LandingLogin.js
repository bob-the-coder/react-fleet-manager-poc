import React, {Component} from 'react';
import StripeTextField from './StripeTextField.js';
import {ButtonSecondary} from 'ride/Buttons.js';

import './landing-login.css';

export default class LandingLogin extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	handleLogin(){
		localStorage.setItem('cookie', 'wolololo');
		window.location.reload();
	}

	render(){
		return (
			<div className='landing-login'>
				<StripeTextField 
					label='Username / Email' />
				<StripeTextField 
					type='password'
					label='Password' />
				<ButtonSecondary
					label='Log In'
					onClick={this.handleLogin.bind(this)} />
			</div>
		);
	}
}