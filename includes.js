const includes = (array, searchElement) => {
	let isTrue = false;

	array.forEach(element => {
		if (element === searchElement) return isTrue = true;
	});
	
	return isTrue;
};

const numbers = [1, 2, 3, 4, 5];

console.log(includes(numbers, 10))