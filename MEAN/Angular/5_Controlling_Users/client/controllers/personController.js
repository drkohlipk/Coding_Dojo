app.controller('personController', ['$scope', function($scope) {
	$scope.people = [];
	$scope.order = 'firstName';
	$scope.addUser = function() {
		$scope.people.push($scope.personInp);
		$scope.personInp = {};
		document.getElementById('cursor').focus();
	};

	$scope.changeOrder = function(val) {
		$scope.order = val;
	};

	$scope.deleteUser = function(val) {
		$scope.people.splice(val, 1);
	};
}]);
