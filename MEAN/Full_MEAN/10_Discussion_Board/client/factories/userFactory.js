app.factory('userFactory', ['$http', function($http) {
	return {
		login(user, cb) {
			$http.post('/users', user).then(response => {
				if (typeof(cb) === 'function') {
					cb(response.data);
				}
			});
		}
	};
}]);
