var people = [{
	name: "Robert",
	pet_id: 2
}, {
	name: "Swetha",
	pet_id: 4
}, {
	name: "Jack",
	pet_id: 3
}, {
	name: "Bob",
	pet_id: 1
}];

var pets = [{
	id: 1,
	type: 'fish'
}, {
	id: 2,
	type: 'dog'
}, {
	id: 3,
	type: 'cat'
}, {
	id: 4,
	type: 'pygmy elephant'
}];

function joinByPet_id(arr1, arr2) {
	var array = [];
	for (var i = 0; i < arr1.length; i++) {
		var obj = {};
		obj.name = arr1[i].name;
		for (var j = 0; j < arr2.length; j++) {
			if (arr1[i].pet_id == arr2[j].id) {
				obj.pet = arr2[j].type;
			}
		}
		array.push(obj);
	}
	return array;
}

console.log(joinByPet_id(people, pets));
