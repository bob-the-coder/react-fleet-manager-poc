import React, {Component} from 'react';

import './menu.css'
var faker = require('faker/locale/en');

let routeMatches = function(url){
	let origin = window.location.origin + '/#';
	let path = window.location.href.substring(origin.length);

	if(url === '/') {
		return path === '/';
	}

	return path.indexOf(url) >= 0;
}

let user = {
	name: faker.name.firstName() + ' ' + faker.name.lastName(),
	photoUrl: faker.image.avatar(),
	job: faker.name.jobTitle(),
	notifications: Math.ceil(faker.random.number())
};

let routes = [
	{ icon: faker.image.avatar(), label: 'Home', url: '/'},
	{ icon: faker.image.avatar(), label: 'Login', url: '/login'},
	{ icon: faker.image.avatar(), label: 'Trip Planner', url: '/trip/plan'},
	{ icon: faker.image.avatar(), label: 'Trip Finder', url: '/trip/find'},
	{ icon: faker.image.avatar(), label: 'My Trips', url: '/trip/mine'},
	{ icon: faker.image.avatar(), label: 'Offers', url: '/trip/offers'},
];

export default class Menu extends Component {
	changeLocation(url){
		window.location = '/#' + url;
	}

	renderProfile(){
		return (
			<div className={'profile' + (routeMatches('/profile') ? ' active' : '')}
				onClick={this.changeLocation.bind(this, '/profile')}>
				<div className='clearfix'>
					<img className='profile-pic' src={user.photoUrl} />
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
			var className = 'menu-item' + (routeMatches(r.url) ? ' active' : '');
			
			return (
				<div 
					className={className} 
					key={Math.random()} 
					onClick={this.changeLocation.bind(this, r.url)}>
					<img className='menu-icon' src={r.icon} />
					{r.label}
				</div>
			);
		});
	}

	renderLogout(){
		return (
			<div className='menu-item'>
				<img className='menu-icon' src={faker.image.avatar()} />
				Log Out
			</div>
		);
	}

	render(){
		let path = window.location.href.substring(window.origin.length + 2);

		if(path === '/') return (<div></div>);

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