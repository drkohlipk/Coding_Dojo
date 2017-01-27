app.controller('dashController', ['$scope', '$location', '$cookies',
	'questionFactory',
	function($scope, $location, $cookies, questionFactory) {
		$scope.name = $cookies.get('name');
		$scope.questions = [];
		questionFactory.index(data => {
			if (data.errors) console.log(data.errors);
			else $scope.questions = data;
		});
	}
]);
