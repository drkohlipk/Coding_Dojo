var mongoose = require('mongoose');

var VelociraptorSchema = new mongoose.Schema({
	name: String,
	age: Number,
	number_of_claws: Number
});

mongoose.model('Velociraptor', VelociraptorSchema);
