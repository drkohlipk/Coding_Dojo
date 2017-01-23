app.factory('friendsFactory', ['$http', function($http) {
	var friends = [],
		friend = {};
	const factory = {
		index: cb => {
			$http.get('/friends').then(response => {
				friends = response.data;
				if (typeof(cb) == 'function') {
					cb(response.data);
				}
			}, err => {
				console.log(err);
			});
		},
		create: (newFriend, cb) => {
			friends.push(newFriend);
			$http.post('/friends', newFriend).then(response => {
				friend = response.data;
				if (typeof(cb) == 'function') {
					cb(response.data);
				}
			}, err => {
				console.log(err);
			});
		},
		show: (id, cb) => {
			$http.get('/friends/' + id).then(response => {
				friend = response.data;
				if (typeof(cb) == 'function') {
					cb(response.data);
				}
			}, err => {
				console.log(err);
			});
		},
		update: (updatedFriend, cb) => {
			$http.post('/friends/update', updatedFriend).then(response => {
				if (typeof(cb) == 'function') {
					cb(response.data);
				}
			}, err => {
				console.log(err);
			});
		},
		delete: id => {
			$http.delete('/friends/' + id).then(response => {
				console.log(response.data);
			}, err => {
				console.log(err);
			});
		},
		getFriend: cb => {
			if (typeof(cb) == 'function') {
				cb(friend);
			}
		},
		getFriends: cb => {
			if (typeof(cb) == 'function') {
				cb(friends);
			}
		}
	};

	return factory;
}]);
