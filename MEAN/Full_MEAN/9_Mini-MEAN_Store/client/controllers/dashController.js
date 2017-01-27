app.controller('dashController', ['$scope', function($scope) {
	$scope.dashFiltered = '';
	$scope.search = () => {
		$scope.dashFiltered = $scope.searchText;
		$scope.searchText = '';
		document.getElementById('prodCursor').focus();
	};
	$scope.reset = () => {
		$scope.dashFiltered = '';
		$scope.searchText = '';
		document.getElementById('prodCursor').focus();
	};
}]);
