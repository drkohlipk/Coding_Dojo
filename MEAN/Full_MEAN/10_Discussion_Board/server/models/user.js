import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		required: [true, 'User name not provided']
	},
	questions: [{
		type: Schema.Types.ObjectId,
		ref: 'Questions'
	}],
	answers: [{
		type: Schema.Types.ObjectId,
		ref: 'Answers'
	}],
	comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comments'
	}]
}, {
	timestamps: true
});

mongoose.model('User', UserSchema);
