app.factory('productFactory', () => {
	let products = [{
		name: 'Keyboard',
		price: 149.99
	}, {
		name: 'Mouse',
		price: 59.99
	}, {
		name: 'Basketball',
		price: 21.99
	}];

	let factory = {
		index: cb => {
			cb(products);
		},
		addProd: product => {
			products.push(product);
		},
		arrangeProd: prods => {
			products = prods;
			console.log(prods);
		},
		deleteProd: prod => {
			products.splice(products.indexOf(prod), 1);
		}
	};
	return factory;
});
