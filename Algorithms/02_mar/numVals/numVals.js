function getCount(countObj) {
	var count = 0;

	for (var key in countObj) {
		count++;
	}

	return count;
}

var inpObj = {
	"band": "Travis Shredd & the Good 'ol Homeboys",
	"style": "Country/Metal/Rap",
	"album": "The Neighbor of the Beast"
};

console.log(getCount(inpObj));
