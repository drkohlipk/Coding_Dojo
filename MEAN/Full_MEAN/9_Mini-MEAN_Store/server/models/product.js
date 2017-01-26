import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Product Name not provided'],
		minlength: [2, 'Product Name must be at least 2 characters in length']
	},
	img: {
		type: String,
		required: [true, 'Image URL not provided'],
		validate: {
			validator: val => { //checks to see if the image URL contains either http:// or https:// as a prefix (followed by something else)
				return /^(http:\/\/|https:\/\/){1}.+$/.test(val);
			},
			message: 'Image URL is not in the proper format'
		}
	},
	desc: {
		type: String,
		required: [true, 'Description not provided'],
		minlength: [10, 'Description must be at least 10 characters in length'],
		maxlength: [250, 'Description must be less than 250 characters in length']
	},
	qty: {
		type: Number,
		required: [true, 'Initial quantity not provided'],
		min: [0, 'Quantity can not be less than 0']
	},
	orders: [{
		type: Schema.Types.ObjectId,
		ref: 'Order'
	}]
}, {
	timestamps: true
});

mongoose.model('Product', ProductSchema);
