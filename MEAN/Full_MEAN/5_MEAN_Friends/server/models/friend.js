import mongoose from 'mongoose';

const FriendSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	birthday: {
		type: Date,
		required: true
	}
}, {
	timestamps: true
});

const Friend = mongoose.model('Friend', FriendSchema);
