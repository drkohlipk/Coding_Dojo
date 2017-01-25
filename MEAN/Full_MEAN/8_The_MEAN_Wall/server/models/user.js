import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({ //creates a constant variable storing the UserSchema model
	username: { //user must contain a username...
		type: String,
		minlength: [2, 'Username not long enough'], //user must be at least 2 characters in length
		required: [true, 'Username not provided'] //this field is required, if it is left blank, throw this error
	}
}, {
	timestamps: true //require timestamps on all users
});

mongoose.model('User', UserSchema);
