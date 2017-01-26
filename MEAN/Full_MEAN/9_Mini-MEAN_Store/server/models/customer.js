import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
	firstName: {
		type: String,
		required: [true, 'First Name not provided'],
		minlength: [2, 'First Name must be at least 2 characters in length']
	},
	lastName: {
		type: String,
		required: [true, 'Last Name not provided'],
		minlength: [2, 'Last Name must be at least 2 characters in length']
	},
	active: {
		type: Boolean,
		required: [true, 'Customer activity not provided']
	},
	orders: [{
		type: Schema.Types.ObjectId,
		ref: 'Order'
	}]
}, {
	timestamps: true
});

mongoose.model('Customer', CustomerSchema);
