app.controller('editController', ['$scope', '$location', '$routeParams',
	'friendsFactory',
	function($scope, $location, $routeParams, friendsFactory) {
		$scope.friend = {};
		$scope.updateFriend = () => {
			friendsFactory.update($routeParams.id, $scope.updateFriend, data => {
				$scope.friend = data;
				console.log(data);
				document.getElementById('datePicker').value = new Date(data.birthday).toDateInputValue();
			});
		};
		friendsFactory.show($routeParams.id, data => {
			$scope.friend = data;
			console.log(data);
			document.getElementById('datePicker').value = new Date(data.birthday).toDateInputValue();
		});
	}
]);
