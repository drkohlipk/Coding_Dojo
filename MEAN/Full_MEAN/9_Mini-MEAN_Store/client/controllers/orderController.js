app.controller('orderController', ['$scope', 'orderFactory', function($scope,
	orderFactory) {
	$scope.errors = [];
	$scope.makeOrder = () => {
		if (!$scope.selected || !$scope.selected._customer || !$scope.selected._product ||
			!$scope.selected.qty) {
			$scope.errors.push('Please fill in all fields');
		} else {
			orderFactory.makeOrder($scope.selected, data => {
				if (data.errors) {
					for (let key in data.errors) {
						$scope.errors.push(data.errors[key].message);
					}
				} else {
					orderFactory.index(data => {
						if (data.errors) {
							$scope.errors = data.errors;
						} else {
							$scope.products = data;
						}
					});
				}
			});
		}
	};
	this.prodQty = [];
	$scope.getQty = (n) => {
		this.prodQty = [];
		for (let i = 1; i <= n; i++) {
			this.prodQty.push(i);
		}
	};
	this.qtyInp = true;
	this.getQty = () => {
		this.qtyInp = false;
		$scope.getQty(this.selected.product.qty);
	};
	orderFactory.index(data => {
		if (data.errors) {
			$scope.errors = data.errors;
		} else {
			$scope.products = data;
		}
	});
}]);
