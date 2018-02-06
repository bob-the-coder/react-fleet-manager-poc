import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../css/menu.css';

class Menu extends Component{
	constructor(){
		super();
		this.state = {
			items: [
				{ label: 'Home', url: '/'},
				{ label: 'Plan Trip', url: '/plan'},
				{ label: 'Planned Trips', url: '/trips/planned'},
				{ label: 'Offers', url: '/offers'},
				{ label: 'Upcoming Trips', url: '/trips/upcoming'},
				{ label: 'News', url: '/news'}
			]
		}
	}

	render(){
		let $list = this.state.items.map(item => <NavLink className='menu-item' to={item.url} key={Math.random()}><li>{item.label}</li></NavLink>);

		return (<ul className='menu white-block'>{$list}</ul>);
	}
}

export default Menu;