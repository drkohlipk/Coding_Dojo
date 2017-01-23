app.controller('editController', ['$scope', '$location', '$routeParams',
	'friendsFactory',
	function($scope, $location, $routeParams, friendsFactory) {
		$scope.friend = {};
		$scope.updateFriend = () => {
			if ($scope.update.birthday) {
				$scope.friend.birthday = $scope.update.birthday;
			}
			friendsFactory.update($scope.friend, data => {
				$scope.friend = data;
				$location.url('/');
			});
		};
		friendsFactory.show($routeParams.id, data => {
			$scope.friend = data;
		});
	}
]);
