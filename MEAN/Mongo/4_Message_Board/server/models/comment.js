var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CommentSchema = new Schema({
	name: {
		type: String,
		required: true,
		minlength: 4
	},
	comment: {
		type: String,
		required: true
	},
	_message: {
		type: Schema.Types.ObjectId,
		ref: 'Message'
	}
}, {
	timestamps: true
});

mongoose.model('Comment', CommentSchema);
