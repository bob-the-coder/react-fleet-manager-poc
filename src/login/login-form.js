import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './login-form.css';

class LoginForm extends Component {
	handleLogin(){
		window.location = '/#/trip/plan';
	}

	render(){
		return (
			<div className='lf'>
				<div className='lf-banner'>
					
				</div>
				<div className='lf-line'>
					<TextField
						hintText="my-email@service.com"
						floatingLabelText="Email"
						fullWidth={true}
		    		/>
				</div>
				<div className='lf-line'>
					<TextField
						hintText="your password"
						floatingLabelText="Password"
						fullWidth={true}
						type='password'
		    		/>
				</div>
				<div className='lf-line lf-center margin-top-bottom'>
					<a href='/'>I've misplaced my password</a>
				</div>
				<div className='lf-line'>
					<RaisedButton primary={true} fullWidth={true} onClick={this.handleLogin} label='Log In' />
				</div>
				<div className='lf-line lf-center margin-top-bottom'>
					New user? Join now!
				</div>
				<div className='lf-line'>
					<RaisedButton primary={true} fullWidth={true} label='Create Account' />
				</div>
			</div>
		);
	}
}

export default LoginForm;