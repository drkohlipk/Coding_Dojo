app.controller('CustomizeUsersController', ['$scope', 'userFactory', function(
	$scope, userFactory) {
	$scope.users = [];
	$scope.order = 'firstName';
	$scope.changeOrder = order => {
		$scope.order = order;
	};
	$scope.createUser = () => {
		userFactory.addUser($scope.newUser);
		$scope.newUser = {};
		document.getElementById('cursor').focus();
	};
	userFactory.getUsers(data => {
		$scope.users = data;
	});
	$scope.deleteUser = user => {
		userFactory.removeUser(user);
	};
	document.getElementById('cursor').focus();
}]);
