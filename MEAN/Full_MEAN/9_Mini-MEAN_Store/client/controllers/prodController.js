app.controller('prodController', ['$scope', '$location', 'prodFactory',
	function($scope, $location, prodFactory) {
		$scope.products = [];
		$scope.errors = [];
		$scope.filtered = '';
		$scope.dashLimit = 5;
		$scope.prodLimit = 15;
		$scope.search = () => {
			$scope.filtered = $scope.searchText;
			$scope.searchText = '';
			document.getElementById('prodCursor').focus();
		};
		$scope.reset = () => {
			$scope.filtered = '';
			$scope.searchText = '';
			document.getElementById('prodCursor').focus();
		};
		$scope.makeProd = () => {
			if (!$scope.prod || !$scope.prod.name || !$scope.prod.img || !$scope.prod
				.desc || !$scope.prod.qty) {
				$scope.errors.push('Please fill in all fields');
			}
			prodFactory.makeProd($scope.prod, data => {
				if (data.errors) {
					for (let key in data.errors) {
						$scope.errors.push(data.errors[key].message);
					}
				} else {
					prodFactory.index(data => {
						if (data.errors) {
							$scope.errors = data.errors;
						} else {
							$scope.products = data;
						}
					});
				}
			});
			$scope.prod = {};
		};
		$scope.expandProds = page => {
			if (page == 'prod') {
				$scope.prodLimit = $scope.products.lenth;
			} else if (page == 'dash') {
				$scope.dashLimit = $scope.products.lenth;
			}
			$scope[page] = 'retract';
		};
		$scope.retractProds = page => {
			if (page == 'prod') {
				$scope.prodLimit = 15;
			} else if (page == 'dash') {
				$scope.dashLimit = 5;
			}
			$scope[page] = 'expand';
		};
		prodFactory.index(data => {
			if (data.errors) {
				$scope.errors = data.errors;
			} else {
				if (data.length > 15) {
					$scope.prod = 'expand';
				}
				if (data.length > 5) {
					$scope.dash = 'expand';
				}
				$scope.products = data;
			}
		});
	}
]);
