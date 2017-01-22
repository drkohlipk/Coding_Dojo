app.controller('NewController', ['$scope', '$location', 'userFactory', function(
	$scope, $location,
	userFactory) {
	$scope.addUser = () => {
		userFactory.create($scope.user);
		$location.url('/index');
	};
	document.getElementById('newCursor').focus();
}]);
