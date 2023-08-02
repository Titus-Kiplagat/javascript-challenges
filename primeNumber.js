// Implement a function to return prime numbers
// Number who's factors are 1 and itself
const primeNumber = (limit) => {
	for (let number = 2; number <= limit; number += 1) {
		let isPrime = true;

		for (let factor = 2; factor < number; factor += 1) {
			if (number % factor === 0) {
				isPrime = false;
				break;
			};
		};
		if(isPrime) console.log(number);
	}
};

console.log(primeNumber(10))