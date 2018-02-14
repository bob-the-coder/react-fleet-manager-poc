import React, {Component} from 'react';
import Iframe from 'react-iframe'

export default class LandingPage extends Component {
	render(){
		return (
			<div style={{position: 'fixed', marginTop: '50px', left: 0, width: '100vw', height: 'calc(100vh - 50px)'}}>
				<Iframe 
				url='https://codepen.io'
				style={{width: '100%', height: '100%'}} />
			</div>
		);
	}
}