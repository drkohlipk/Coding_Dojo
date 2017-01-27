app.factory('prodFactory', ['$http', function($http) {
	return {
		index(cb) {
				$http.get('/products').then(response => {
					if (typeof(cb) === 'function') {
						cb(response.data);
					}
				});
			},
			makeProd(prod, cb) {
				$http.post('/products', prod).then(response => {
					if (typeof(cb) === 'function') {
						cb(response.data);
					}
				});
			}
	};
}]);
