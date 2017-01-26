app.controller('customerController', ['$scope', '$location', '$cookies',
	'customerFactory',
	function($scope, $location, $cookies, customerFactory) {
		$scope.customers = [];
	}
]);
