app.factory('questionFactory', ['$http', function($http) {
	return {
		index(cb) {
			$http.get('/questions').then(response => {
				if (typeof(cb) === 'function') {
					cb(response.data);
				}
			});
		}
	};
}]);
