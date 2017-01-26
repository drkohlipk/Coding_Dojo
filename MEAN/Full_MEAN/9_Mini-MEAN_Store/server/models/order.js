import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
	qty: {
		type: Number,
		required: [true, 'Product quantity not provided']
	},
	_customer: {
		type: Schema.Types.ObjectId,
		ref: 'Customer'
	},
	_product: {
		type: Schema.Types.ObjectId,
		ref: 'Product'
	}
}, {
	timestamps: true
});

mongoose.model('Order', OrderSchema);
