app.factory('orderFactory', ['$http', function($http) {
	return {
		index(cb) {
			$http.get('/orders').then(response => {
				if (typeof(cb) === 'function') {
					cb(response.data);
				}
			});
		}
	};
}]);
