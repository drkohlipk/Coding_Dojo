app.factory('userFactory', ['$http', function($http) {
	return {
		login(user, cb) { //sends username entered to the backend to log in
			$http.post('/users', user).then(response => {
				if (typeof(cb) === 'function') {
					console.log(response);
					cb(response.data);
				}
			});
		}
	};
}]);
