const _ = {
	checkIterable: item => typeof(item) == 'object',
	checkFunction: func => typeof(func) == 'function',
	map: (list, iteratee) => {
		var nArr = [];
		if (!_.checkIterable(list) || !_.checkFunction(iteratee)) {
			return 'Please pass an iterable object and a function as parameters.';
		}
		if (Array.isArray(list)) {
			for(var i = 0; i < list.length; i++) {
				nArr.push(iteratee(list[i]));
			}
		} else {
			Object.keys(list).map((key, index) => {
				nArr.push(iteratee(list[key]));
			});
		}
		return nArr;
	},
	reduce: (list, iteratee) => {
		var num = 0;
		if (!_.checkIterable(list) || !_.checkFunction(iteratee)) {
			return 'Please pass an iterable object and a function as parameters.';
		}
		if (Array.isArray(list)) {
			for(var i = 0; i < list.length; i++) {
				num += iteratee(list[i]);
			}
		} else {
			Object.keys(list).map((key, index) => {
				num += iteratee(list[key]);
			});
		}
		return num;
	},
	find: (list, predicate) => {
		var num = 0;
		if (!_.checkIterable(list) || !_.checkFunction(predicate)) {
			return 'Please pass an iterable object and a function as parameters.';
		}
		if (Array.isArray(list)) {
			for(var i = 0; i < list.length; i++) {
				if (predicate(list[i])) {
					return list[i];
				}
			}
		} else {
			Object.keys(list).map((key, index) => {
				if (predicate(list[key])) {
					return list[key];
				}
			});
		}
		return undefined;
	},
	filter: (list, predicate) => {
		var arr = [];
		if (!_.checkIterable(list) || !_.checkFunction(predicate)) {
			return 'Please pass an iterable object and a function as parameters.';
		}
		if (Array.isArray(list)) {
			for(var i = 0; i < list.length; i++) {
				if (predicate(list[i])) {
					arr.push(list[i]);
				}
			}
		} else {
			Object.keys(list).map((key, index) => {
				if (predicate(list[key])) {
					arr.push(list[i]);
				}
			});
		}
		return arr;
	},
	reject: (list, predicate) => {
		var arr = [];
		if (!_.checkIterable(list) || !_.checkFunction(predicate)) {
			return 'Please pass an iterable object and a function as parameters.';
		}
		if (Array.isArray(list)) {
			for(var i = 0; i < list.length; i++) {
				if (!predicate(list[i])) {
					arr.push(list[i]);
				}
			}
		} else {
			Object.keys(list).map((key, index) => {
				if (!predicate(list[key])) {
					arr.push(list[i]);
				}
			});
		}
		return arr;
	}
};

console.log(_.reject([1,2,3,4,5], num => num % 2 === 0));
// console.log(_.reduce({a: 1,b: 2,c: 3,d: 4,e: 5}, num => num + 1));
