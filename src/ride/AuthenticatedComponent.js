import {Component} from 'react';

export default class AuthenticatedComponent extends Component {
	constructor(){
		super();
		
		if(!localStorage.getItem("cookie")){
			window.location = '/#/';
		}
	}

	checkAuth(){
		if(window.path() !== '/' && window.path() !== '/login' && !localStorage.getItem("cookie")){
			window.location = '/#/';
		}
	}
}