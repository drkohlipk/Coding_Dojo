import mongoose from 'mongoose';

const FriendSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

const Friend = mongoose.model('Friend', FriendSchema);
