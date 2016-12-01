function unique(str) {
	var nStr = '',
		holder = [],
		added = false;
	loop1: for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < holder.length; j++) {
			if (i == holder[j]) {
				continue loop1;
			}
		}
		for (var k = i + 1; k < str.length; k++) {
			if (str[i] == str[k]) {
				holder.push(k);
				added = true;
			}
		}
		if (!added) {
			nStr += str[i];
		} else {
			added = false;
		}
	}
	return nStr;
}

console.log(unique("bob hope's world"));

function dedupe(str) {
	var nStr = '';
	for (var i = 0; i < str.length - 1; i++) {
		for (var j = i + 1; j < str.length; j++) {
			if (str[i] == str[j]) {
				break;
			} else if (j == str.length-1) {
				nStr += str[i];
			}
		}
	}
	nStr += str[i];
	return nStr;
}

console.log(dedupe('hotdog corndog'));

function censorStr(str) {
	var badWords = ['poo', 'dang'],
		tStr = '',
		star = false;
	nStr = '';
	for (var i = 0; i < str.length; i++) {
		words: for (var j = 0; j < badWords.length; j++) {
			if (str[i] == badWords[j][0]) {
				for (var k = 0; k < badWords[j].length; k++) {
					if (str[i + k] == badWords[j][k]) {
						tStr += '*';
						if (k === badWords[j].length - 1) {
							nStr += tStr;
							tStr = '';
							star = true;
							i += k;
							break words;
						}
					} else {
						tStr = '';
						break;
					}
				}
			}
			if (star) {
				star = false;
			}
		}
		if (!star) {
			nStr += str[i];
		}
	}
	return nStr;
}

console.log(censorStr('poopourridang'));
