import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	name: {
		type: String,
		required: [true, 'Category name not provided']
	},
	questions: [{
		type: Schema.Types.ObjectId,
		ref: 'Questions'
	}]
}, {
	timestamps: true
});

mongoose.model('Category', CategorySchema);
