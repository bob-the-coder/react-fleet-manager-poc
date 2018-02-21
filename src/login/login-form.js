import React, {Component} from 'react';
import {ButtonPrimary, ButtonSecondary} from '../ride/Buttons.js';
import TextField from '../ride/TextField.js';
import './login-form.css';

class LoginForm extends Component {
	handleLogin(){
		window.location = '/#/';
		localStorage.setItem("cookie", "set");
	}

	render(){
		return (
			<div className='lf'>
				<div className='lf-banner'>
					
				</div>
				<div className='lf-line'>
					<TextField
						hint="my-email@service.com"
						label="Email"
		    		/>
				</div>
				<div className='lf-line'>
					<TextField
						hint="your password"
						label="Password"
						type='password'
		    		/>
				</div>
				<div className='lf-line lf-center margin-top-bottom'>
					<a href='/'>I've misplaced my password</a>
				</div>
				<div className='lf-line'>
					<ButtonPrimary onClick={this.handleLogin} label='Log In' />
				</div>
				<div className='lf-line lf-center margin-top-bottom'>
					New user? Join now!
				</div>
				<div className='lf-line'>
					<ButtonSecondary label='Create Account' />
				</div>
			</div>
		);
	}
}

export default LoginForm;