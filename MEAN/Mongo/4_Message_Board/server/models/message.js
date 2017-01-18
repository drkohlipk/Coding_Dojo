var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var MessageSchema = new Schema({
	name: {
		type: String,
		required: true,
		minlength: 4
	},
	message: {
		type: String,
		required: true
	},
	comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}]
}, {
	timestamps: true
});

mongoose.model('Message', MessageSchema);
