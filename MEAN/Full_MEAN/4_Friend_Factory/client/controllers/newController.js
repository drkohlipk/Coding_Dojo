app.controller('newController', ['$scope', '$location', 'friendsFactory',
	function($scope, $location, friendsFactory) {
		$scope.createFriend = () => {
			friendsFactory.create($scope.newFriend, data => {
				$location.url('/edit/' + data._id);
			});
		};
	}
]);
