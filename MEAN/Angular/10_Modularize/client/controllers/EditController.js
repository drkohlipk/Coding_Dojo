app.controller('EditController', ['$scope', 'userFactory', '$location',
	'$routeParams',
	function($scope, userFactory, $location, $routeParams) {
		$scope.controlValue = "Current Name:";

		$scope.getUser = () => {
			userFactory.show($routeParams.id, user => {
				$scope.user = user;
			});
		};

		$scope.updateUser = () => {
			userFactory.update($scope.users, $routeParams.id, userFromFactory => {
				$scope.user = userFromFactory;
				$scope.controlValue = "Updated Name: ";
			});
		};

		$scope.deleteUser = () => {
			userFactory.delete($routeParams.id);
			$location.url('/index');
		};
		$scope.getUser();
	}
]);
