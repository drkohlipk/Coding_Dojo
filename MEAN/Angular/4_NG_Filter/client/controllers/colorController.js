app.controller('colorController', ['$http', '$scope', function($http, $scope) {
	document.getElementById('colorInp').focus();
	$http.get(
			'https://rawgit.com/jjdelc/1868136/raw/c734ad88bb3b5a2b27f4e91a24716024c66da421/crayola.json'
		)
		.then(function(response) {
			$scope.colors = response.data;
		});
}]);
