app.factory('productFactory', () => {
	let products = [{
		name: 'Keyboard',
		price: 149.99,
		qty: 50
	}, {
		name: 'Mouse',
		price: 59.99,
		qty: 50
	}, {
		name: 'Basketball',
		price: 21.99,
		qty: 50
	}];

	let factory = {
		index: cb => {
			cb(products);
		},
		addProd: product => {
			products.push(product);
		},
		deleteProd: prod => {
			products.splice(products.indexOf(prod), 1);
		},
		buyProd: prod => {
			let idx = products.indexOf(prod);
			if (products[idx].qty > 0) {
				products[idx].qty--;
			}
		}
	};
	return factory;
});
