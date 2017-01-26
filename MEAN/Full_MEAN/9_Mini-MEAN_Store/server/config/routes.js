import customers from '../controllers/customers';
import orders from '../controllers/orders';
import products from '../controllers/products';

module.exports = app => {
	app.get('/customers', customers.index);
	app.post('/customers', customers.create);
	app.get('/customers/remove/:id', customers.remove);
	app.get('/customers/reinstate/:id', customers.reinstate);
	app.get('/orders', orders.index);
	app.post('/orders', orders.create);
	app.get('/products', products.index);
	app.post('/products', products.create);
	app.get('/products/:id', products.getOne);
};
