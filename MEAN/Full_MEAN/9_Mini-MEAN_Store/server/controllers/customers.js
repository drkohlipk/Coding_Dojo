import mongoose from 'mongoose';
const Customer = mongoose.model('Customer');

module.exports = (() => {
	return {
		index(req, res) {
				Customer.find({}, (err, data) => {
					if (err) {
						res.json(err);
					} else {
						res.json(data);
					}
				});
			},
			create(req, res) {
				let customer = new Customer(req.body);
				customer.save((err, data) => {
					if (err) {
						res.json(err);
					} else {
						res.json(data);
					}
				});
			},
			remove(req, res) {
				Customer.findOne({
					_id: req.params.id
				}, (err, data) => {
					if (err) {
						res.json(err);
					} else {
						data.active = false;
						data.save((errSave, dataSave) => {
							if (errSave) {
								res.json(errSave);
							} else {
								res.json(dataSave);
							}
						});
					}
				});
			},
			reinstate(req, res) {
				Customer.findOne({
					_id: req.params.id
				}, (err, data) => {
					if (err) {
						res.json(err);
					} else {
						data.active = true;
						data.save((errSave, dataSave) => {
							if (errSave) {
								res.json(errSave);
							} else {
								res.json(dataSave);
							}
						});
					}
				});
			}
	};
})();
