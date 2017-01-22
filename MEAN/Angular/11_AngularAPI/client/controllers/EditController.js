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
			$scope.user.name = $scope.newUser.name;
			$scope.user.email = $scope.newUser.email;
			$scope.user.phone = $scope.newUser.phone;
			$scope.user.website = $scope.newUser.website;
			$scope.user.username = $scope.newUser.username;
			userFactory.update($scope.user, $routeParams.id, userFromFactory => {
				$scope.user = userFromFactory;
				$scope.controlValue = "Updated Name: ";
				$scope.newUser = {};
			});
		};

		$scope.deleteUser = () => {
			userFactory.delete($routeParams.id);
			$location.url('/index');
		};
		$scope.getUser();
	}
]);
