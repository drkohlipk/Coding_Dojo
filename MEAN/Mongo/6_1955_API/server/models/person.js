var mongoose = require('mongoose'),

	PersonSchema = new mongoose.Schema({
		name: {
			type: String,
			required: true
		}
	}, {
		timestamps: true
	}),

	Person = mongoose.model('Person', PersonSchema);
