import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
	answer: {
		type: String,
		required: [true, 'Answer not provided'],
		minlength: [2, 'Answer not long enough'],
		maxlength: [1000, 'Answer too long']
	},
	upvote: {
		type: Number,
		required: [true, 'Upvote not provided'],
		min: [0, 'Upvote cannot be less than zero']
	},
	downvote: {
		type: Number,
		required: [true, 'Downvote not provided'],
		min: [0, 'Downvote cannot be less than zero']
	},
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	_question: {
		type: Schema.Types.ObjectId,
		ref: 'Question'
	},
	comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comments'
	}]
}, {
	timestamps: true
});

mongoose.model('Answer', AnswerSchema);
