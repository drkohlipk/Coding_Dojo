import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MessageSchema = new Schema({ //creates a constant variable storing the MessageSchema model
	username: {
		type: String,
		required: [true, 'Username not provided']
	},
	message: { //must contain a message...
		type: String,
		required: [true, 'Message not provided'] //this field is required, if it is left blank, throw this error
	},
	comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}]
}, {
	timestamps: true //require timestamps on all messages
});

mongoose.model('Message', MessageSchema);
