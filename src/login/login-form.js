import React, {Component} from 'react';
import './login-form.css';

class LoginForm extends Component {
	render(){
		return (
			<div className='lf'>
				<div className='lf-banner'>
					
				</div>
				<div className='lf-line'>
					<label>Username</label>
					<input type='text' className='input' placeholder='my-email@service.com' />
				</div>
				<div className='lf-line'>
					<label>Password</label>
					<input type='password' className='input' placeholder='password' />
				</div>
				<div className='lf-line lf-center'>
					<a href='/'>I've misplaced my password</a>
				</div>
				<div className='lf-line'></div>
				<div className='lf-line'></div>
				<div className='lf-line'>
					<button className='btn btn-primary'>
						<a href='/#/trip/plan'>Log In</a>
					</button>
				</div>
				<div className='lf-line lf-center'>
					New user? Join now!
				</div>
				<div className='lf-line'>
					<button className='btn btn-primary'>Create Account</button>
				</div>
			</div>
		);
	}
}

export default LoginForm;