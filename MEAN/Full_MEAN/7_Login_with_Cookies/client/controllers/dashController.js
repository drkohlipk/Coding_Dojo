app.controller('dashController', ['$scope', '$location', '$cookies',
	'userFactory',
	function($scope, $location, $cookies, userFactory) { //creates dashController and passes these variables
		$scope.firstName = ''; //creates the user variable and sets to an empty object
		$scope.checkSesh = () => { //runs the checkSesh method of userFactory (keeps user from bypassing login)
			if (!$cookies.get('id')) { //if the returned data is undefined or null...
				$location.url('/'); //return the user to the root
			} else { //if the returned data is not null...
				$scope.firstName = $cookies.get('firstName'); //store the user information in $scope.user
			}
		};
		$scope.logout = () => {
			$cookies.remove('id');
			$cookies.remove('firstName');
			$cookies.remove('lastName');
			$location.url('/'); //return the user to the root
		};
		$scope.checkSesh();
	}
]);
