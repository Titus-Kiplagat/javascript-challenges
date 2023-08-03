const createAddress = (street, city, zipCode) => {
	return {
		street,
		city,
		zipCode,
	};
};

console.log(createAddress('a', 'b', 'c'));