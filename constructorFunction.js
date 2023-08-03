// Regular function declaration
function CreateAddress(street, city, zipCode) {
	this.street = street;
	this.city = city;
	this.zipCode = zipCode;
}

// Using ES6 class sythax
class Address {
	constructor(street, city, zipCode) {
		this.street = street;
		this.city = city;
		this.zipCode = zipCode;
	}
}

const address = new Address('a', 'b', 'c');
console.log(address);