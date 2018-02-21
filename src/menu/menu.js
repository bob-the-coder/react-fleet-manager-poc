import React from 'react';
import AuthenticatedComponent from 'ride/AuthenticatedComponent.js';

import './menu.css'
var faker = require('faker/locale/en');

let user = {
	name: faker.name.firstName() + ' ' + faker.name.lastName(),
	photoUrl: faker.image.avatar(),
	job: faker.name.jobTitle(),
	notifications: Math.ceil(faker.random.number())
};

let routes = [
	{ icon: faker.image.avatar(), label: 'Sandbox', url: '/sandbox'},
	{ icon: faker.image.avatar(), label: 'Fleet', url: '/fleet'},
	{ icon: faker.image.avatar(), label: 'Trip Planner', url: '/trip/plan'},
	{ icon: faker.image.avatar(), label: 'Trip Finder', url: '/trip/find'},
	{ icon: faker.image.avatar(), label: 'My Trips', url: '/trip/mine'},
	{ icon: faker.image.avatar(), label: 'Offers', url: '/trip/offers'},
];

export default class Menu extends AuthenticatedComponent {
	changeLocation(url){
		window.location = '/#' + url;
	}

	renderProfile(){
		return (
			<div className={'profile' + (window.routeMatches('/profile') ? ' active' : '')}
				onClick={this.changeLocation.bind(this, '/profile')}>
				<div className='clearfix'>
					<img className='profile-pic' src={user.photoUrl} alt=''/>
					<div>
						<div>
							<div className='profile-name'>{user.name}</div>
							<div className='profile-job'>{user.job}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	renderRoutes(){
		return routes.map((r) => {
			var className = 'menu-item' + (window.routeMatches(r.url) ? ' active' : '');
			
			return (
				<div 
					className={className} 
					key={Math.random()} 
					onClick={this.changeLocation.bind(this, r.url)}>
					<img className='menu-icon' src={r.icon} alt='' />
					{r.label}
				</div>
			);
		});
	}

	handleLogout(){
		localStorage.removeItem("cookie");
		this.checkAuth();
	}

	renderLogout(){
		return (
			<div className='menu-item' onClick={this.handleLogout.bind(this)}>
				<img className='menu-icon' src={faker.image.avatar()} alt='' />
				Log Out
			</div>
		);
	}

	render(){
		if(window.path() === '/' || window.path() === '/login') return null;

		let $items = this.renderRoutes();
		let $profile = this.renderProfile();
		let $logout = this.renderLogout();

		return (
			<div className='fixed margin-top-70 menu'>
				<div className='menu-group'>{$profile}</div>
				<div className='menu-group'>{$items}</div>
				<div className='menu-group'>{$logout}</div>
			</div>
		);
	}
}