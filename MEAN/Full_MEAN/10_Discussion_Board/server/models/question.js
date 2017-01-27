import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
	question: {
		type: String,
		required: [true, 'Question not provided'],
		minlength: [10, 'Question not long enough'],
		maxlength: [250, 'Question too long']
	},
	description: {
		type: String,
		required: [true, 'Description not provided'],
		minlength: [10, 'Description not long enough'],
		maxlength: [1000, 'Description too long']
	},
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	_category: {
		type: Schema.Types.ObjectId,
		ref: 'Category'
	},
	answers: [{
		type: Schema.Types.ObjectId,
		ref: 'Answers'
	}]
}, {
	timestamps: true
});

mongoose.model('Question', QuestionSchema);
