var faker = require('faker/locale/en');

export default class Aircraft {
	constructor(){
		this.name = faker.random.word() + faker.system.fileExt().toUpperCase();
		this.seats = Math.ceil(Math.random() * 100 % 25) + 1;
		this.registration = faker.random.uuid();
		this.category = faker.name.jobType();
	}
}