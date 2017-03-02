const invertHash = mapToInv => {
	let resMap = new Map();

	for (let [key, val] of mapToInv) {
		resMap.set(val, key);
	}

	return resMap;
};

const inpMap = new Map();
inpMap.set("name", "Zaphod");
inpMap.set("charm", "high");
inpMap.set("morals", "dicey");

console.log(invertHash(inpMap));
