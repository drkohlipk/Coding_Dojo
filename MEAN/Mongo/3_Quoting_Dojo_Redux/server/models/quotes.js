var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var QuoteSchema = new Schema({
	quote: {
		type: String,
		required: true
	},
	poster: {
		type: String,
		required: true
	},
	time: {
		type: Date,
		default: Date.now
	},
	likes: {
		type: Number,
		default: 0
	}
});

mongoose.model('Quote', QuoteSchema);
