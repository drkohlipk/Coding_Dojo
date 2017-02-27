/*jshint esversion: 6*/

const curr = {
	'quarter': 25,
	'dime': 10,
	'nickel': 5,
	'penny': 1
};

const makeChange = value => {
	let change = {};
	for (let key in curr) {
		if (value <= 0) break;
		let diff = Math.floor(value / curr[key]);
		if (diff >= 1) {
			change[key] = diff;
			value -= curr[key] * diff;
		}
	}
	return change;
};

console.log(makeChange(94));
