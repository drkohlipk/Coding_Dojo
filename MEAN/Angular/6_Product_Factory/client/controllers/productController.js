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
		productFactory.addProd($scope.product);
		$scope.product = {};
	};

	$scope.deleteProduct = prod => {
		productFactory.deleteProd(prod);
	};
}]);
