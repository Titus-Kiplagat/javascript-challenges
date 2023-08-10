const countOccurences = (array, searchElement) => {
	return array.reduce((count, element) => (element === searchElement ? count += 1 : count += 0), 0);
};

const numbers = [1, 2, 3, 3, 4];
const count = countOccurences(numbers, 3);
console.log(count);