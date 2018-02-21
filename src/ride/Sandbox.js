import React, {Component} from 'react';
import Dropdown from 'ride/Dropdown.js';

var faker = require('faker/locale/en');

let randomProfile = () => {return { name: faker.name.firstName(), ip: faker.internet.ip(), avatar: faker.image.avatar()}}

let profiles = [];
for(let i = 0; i < 15; i++){
	profiles.push(randomProfile());
}

export default class Sandbox extends Component {
	customRender(profile){
		if(profile.ip[0] === '2'){
			return (
				<li>
					<img src={profile.avatar} style={{height: '30px', width: '30px'}} alt='' />
					{profile.name} {profile.ip}
				</li>
			)
		}
		if(profile.ip[0] === '1'){
			return (
				<li>
					{profile.name} {profile.ip}
					<img src={profile.avatar} style={{height: '30px', width: '30px'}} alt='' />
				</li>
			)
		}
		return (
				<li>
					{profile.name} {profile.ip}
				</li>
			)
	}

	render() {
		return (
			<div>
				<div className='white-block'>
					<Dropdown value={profiles[2]}
						alias={x => x.name + ' ' + x.ip }
						options={profiles}
						template={this.customRender} />
				</div>
			</div>
		);
	}
}