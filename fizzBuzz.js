const fizzBuzz = (input) => {
	if (typeof input !== 'number') {
		return NaN;
	} else if ((input % 3 === 0) && (input % 5 === 0)) {
		return "FIZZBUZZ";
	} else if (input % 3 === 0) {
		return "FIZZ";
	} else if (input % 5 === 0) {
		return "BUZZ";
	} else {
		return input;
	}
};

console.log(fizzBuzz(7));