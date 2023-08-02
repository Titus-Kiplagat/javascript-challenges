const marks = [80, 80, 50];

const calculateAverage = (array) => {
	let sum = 0;

	for (let element of array) {
		sum += element;
	};
	
	return sum / array.length;
};

const calculateGrade = (marks) => {
	const average = calculateAverage(marks);
	
	if (average < 60) return 'F';
	else if (average < 70) return 'D';
	else if (average < 80) return 'C';
	else if (average < 90) return 'B';
	return 'A';
};

console.log(calculateGrade(marks));