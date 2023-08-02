const array = [0, null, undefined, '', 1, 'Mosh', '2'];

const countTruthy = (array) => {
	let count = 0;
	
	for (let element of array) {
		if (element) count += 1;
	}

	return count;
};

console.log(countTruthy(array));