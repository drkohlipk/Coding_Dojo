app.factory('customerFactory', ['$http', function($http) {
	return {
		index(cb) {
				$http.get('/customers').then(response => {
					if (typeof(cb) === 'function') {
						cb(response.data);
					}
				});
			},
			makeCustomer(customer, cb) {
				$http.post('/customers', customer).then(response => {
					if (typeof(cb) === 'function') {
						cb(response.data);
					}
				});
			}
	};
}]);
