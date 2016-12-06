function maze(num, count) {
	while (num > 1) {
		count++;
		if (num % 2 === 0) {
			num = num/2;
		} else {
			num = (3 * num) + 1;
		}
	}
	// console.log(count);
	return count;
}

function maxMaze(num) {
	var max = 0,
		maxCount = 0;
	for (var i = 2; i <= num; i++) {
		var currCount = maze(i, 0);
		if (currCount > maxCount) {
			maxCount = currCount;
			max = i;
		}
	}
	return max;
}

console.log(maxMaze(1000000));
