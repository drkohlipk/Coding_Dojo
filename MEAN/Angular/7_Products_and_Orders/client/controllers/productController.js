app.controller('productController', ['$scope', 'productFactory', (
	$scope,
	productFactory) => {
	document.getElementById('cursor').focus();

	$scope.products = [];

	$scope.order = 'name';

	$scope.changeOrder = val => {
		$scope.order = val;
	};

	productFactory.index(data => {
		$scope.products = data;
	});

	$scope.createProduct = () => {
		$scope.error = undefined;
		$scope.product.qty = 50;
		productFactory.addProd($scope.product);
		$scope.product = undefined;
		document.getElementById('cursor').focus();
	};

	$scope.deleteProduct = prod => {
		productFactory.deleteProd(prod);
	};
}]);
