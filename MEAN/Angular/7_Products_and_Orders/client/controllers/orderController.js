app.controller('orderController', ['$scope', 'productFactory', (
	$scope,
	productFactory) => {

	$scope.products = [];

	$scope.order = 'name';

	$scope.changeOrder = val => {
		$scope.order = val;
	};

	productFactory.index(data => {
		$scope.products = data;
	});

	$scope.buyProduct = prod => {
		productFactory.buyProd(prod);
	};
}]);
