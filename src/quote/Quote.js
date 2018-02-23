var faker = require('faker/locale/en');
let guid faker.random.uuid;

export class Quote {
	constructor(){
		this.Id = guid();
		this.CompanyId = guid();
		this.CreatedBy = guid();
		this.RideId = guid();
		this.Legs = [];
		this.Fees = [];
	}
}

export class QuoteLeg {
	constructor() {
		this.Id = guid();
		this.QuoteId = guid();
		this.FromLocationId = guid();
		this.ToLocationId = guid();
		this.FromDateUtc = '';
		this.ToDateUtc = '';
		this.PaxInfo = {
			Adults: 1,
			Children: 0,
			Pets: {
				Dog: 1,
				Cat: 0,
				Other: ''
			}
		};
		this.Fees = [];
	}
}