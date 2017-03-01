const zipArr = (arr1, arr2) => {
	let resObj = {},
		n = arr1.length > arr2.length ? arr2.length : arr1.length;

	for (let i = 0; i < n; i++) {
		resObj[arr1[i]] = arr2[i];
	}

	return resObj;
};

const firstArr = ['abc', 3, 'yo'],
	secondArr = [42, 'wassup', true];

console.log(zipArr(firstArr, secondArr));
