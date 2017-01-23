app.controller('showController', ['$scope', '$location', '$routeParams',
	'friendsFactory',
	function($scope, $location, $routeParams, friendsFactory) {
		$scope.friend = {};
		$scope.editFriend = id => {
			$location.url('/edit/' + id);
		};

		$scope.deleteFriend = id => {
			friendsFactory.delete(id);
			$location.url('/');
		};

		friendsFactory.show($routeParams.id, friend => {
			$scope.friend = friend;
		});
	}
]);
