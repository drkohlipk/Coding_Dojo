import mongoose from 'mongoose';
const Product = mongoose.model('Product');

module.exports = (() => {
	return {
		index(req, res) {
				Product.find({}, (err, data) => {
					if (err) {
						res.json(err);
					} else {
						res.json(data);
					}
				});
			},
			create(req, res) {
				let product = new Product(req.body);
				product.save((err, data) => {
					if (err) {
						res.json(err);
					} else {
						res.json(data);
					}
				});
			},
			getOne(req, res) {
				Product.findOne({
					_id: req.params.id
				}, (err, data) => {
					if (err) {
						res.json(err);
					} else {
						res.json(data);
					}
				});
			}
	};
})();
