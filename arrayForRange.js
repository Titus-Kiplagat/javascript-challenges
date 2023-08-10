const arrayForRange = (min, max) => {
	const output = [];

	for (let i = min; i <= max; i += 1) {
		output.push(i);
	}

	return output;
};

const numbers = arrayForRange(1, 10);
console.log(numbers);