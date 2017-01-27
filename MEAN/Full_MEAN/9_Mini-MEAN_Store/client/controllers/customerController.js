app.controller('customerController', ['$scope', '$location', '$cookies',
	'customerFactory',
	function($scope, $location, $cookies, customerFactory) {
		$scope.customers = [];
		$scope.errors = [];
		$scope.makeCustomer = () => {
			if (!$scope.cust || !$scope.cust.firstName || !$scope.cust.lastName) {
				$scope.errors.push('Please fill in all fields');
			} else {
				$scope.cust.active = true;
				customerFactory.makeCustomer($scope.cust, data => {
					if (data.errors) {
						for (var key in data.errors) {
							$scope.errors.push(data.errors[key].message);
						}
					} else {
						customerFactory.index(data => {
							if (data.errors) {
								console.log(data.errors);
							} else {
								$scope.customers = data;
							}
						});
					}
				});
			}
		};
		customerFactory.index(data => {
			if (data.errors) {
				console.log(data.errors);
			} else {
				$scope.customers = data;
			}
		});
	}
]);
