const getMax = (array) => {
	if (array.length === 0) return undefined;
	return Math.max(...array);
};

const getMax = (array) => {
	if (array.length === 0) return undefined;
	let max = array[0];
	array.forEach(element => {
		if (element > max) {
			max = element;
		};
	});
	return max;
};

const getMax = (array) => {
	if (array.length === 0) return undefined;
	return array.reduce((max, element) => (element > max ? max = element : max), 0);
}

const numbers = [1, 2, 3, 4];
console.log(getMax(numbers));