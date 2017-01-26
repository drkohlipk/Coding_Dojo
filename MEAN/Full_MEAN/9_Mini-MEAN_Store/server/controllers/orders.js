import mongoose from 'mongoose';
const Order = mongoose.model('Order'),
	Customer = mongoose.model('Customer'),
	Product = mongoose.model('Product');

module.exports = (() => {
	return {
		index(req, res) { //gets all orders with associated product and customer
				Order.find({})
					.populate('_customer _product')
					.exec((err, data) => {
						if (err) {
							res.json(err);
						} else {
							res.json(data);
						}
					});
			},
			create(req, res) { //creates new order and inserts order id into respective customer and product order arrays.
				let order = new Order(req.body);
				order.save((err, data) => {
					if (err) {
						res.json(err);
					} else {
						Customer.findOne({ //find the respective customer based on id
							_id: req.body._customer
						}, (errCust, dataCust) => {
							if (errCust) {
								res.json(errCust);
							} else {
								dataCust.orders.push(data._id); //if no errs, push in the order id and save it
								dataCust.save((errSaveCust, dataSaveCust) => {
									if (errSaveCust) {
										res.json(errSaveCust);
									}
								});
							}
						});
						Product.findOne({ //find the respective product based on id
							_id: req.body._product
						}, (errProd, dataProd) => {
							if (errProd) {
								res.json(errProd);
							} else {
								dataProd.orders.push(data._id); //if no errs, push in the order id and save it
								dataProd.save((errSaveProd, dataSaveProd) => {
									if (errSaveProd) {
										res.json(errSaveProd);
									}
								});
							}
						});
					}
				});
			}
	};
})();
