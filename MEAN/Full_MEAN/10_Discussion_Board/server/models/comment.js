import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	comment: {
		type: String,
		required: [true, 'Comment not provided'],
		minlength: [2, 'Comment not long enough'],
		maxlength: [1000, 'Comment too long']
	},
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	_answer: {
		type: Schema.Types.ObjectId,
		ref: 'Answer'
	}
}, {
	timestamps: true
});

mongoose.model('Comment', CommentSchema);
