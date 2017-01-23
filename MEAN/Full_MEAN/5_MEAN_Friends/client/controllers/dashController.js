app.controller('dashController', ['$scope', '$location', 'friendsFactory',
	function($scope, $location, friendsFactory) {
		$scope.friends = [];
		$scope.order = '';

		$scope.changeOrder = order => {
			$scope.order = order;
		};

		$scope.showFriend = id => {
			$location.url('/show/' + id);
		};

		$scope.editFriend = id => {
			$location.url('/edit/' + id);
		};

		$scope.deleteFriend = id => {
			friendsFactory.delete(id);
			friendsFactory.index(data => {
				$scope.friends = data;
			});
		};

		friendsFactory.index(data => {
			$scope.friends = data;
		});
		document.getElementById('dashCursor').focus();
	}
]);
