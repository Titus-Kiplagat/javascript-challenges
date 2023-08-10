const except = (array, excluded) => {
	return array.filter(number => !excluded.includes(number))
};

const array = [1, 2, 3, 4, 5, 6, 1];
console.log(except(array, [1, 2]))