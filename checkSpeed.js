const checkSpeed = (limit) => {
	const speedLimit = 70;
	const kmPerPoint = 5;
	
	if (limit < (speedLimit + kmPerPoint)) return 'OKAY';
	else {
		const points = Math.floor((limit - speedLimit) / kmPerPoint);
		points >= 12 ? console.log('License suspended') : console.log(`points-${points}`);
	};
};

console.log(checkSpeed(75));