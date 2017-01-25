import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	username: {
		type: String,
		required: [true, 'Username not provided'] //this field is required, if it is left blank, throw this error
	},
	comment: {
		type: String,
		required: [true, 'Comment not provided'] //this field is required, if it is left blank, throw this error
	},
	_message: { //stores the message id for the message it belongs to
		type: Schema.Types.ObjectId,
		ref: 'Message'
	}
}, {
	timestamps: true
});

mongoose.model('Comment', CommentSchema);
