app.factory('userFactory', function($http) {
	function UserConstructor() {

		var users = [];

		this.index = function(functionPassedByControllerAsAnArgToIndex) {
			if (users.length < 10) {
				$http.get(
					'http://ec2-35-167-132-85.us-west-2.compute.amazonaws.com/users').then(
					function(data) {
						if (typeof(functionPassedByControllerAsAnArgToIndex) === 'function') {
							users = data.data;
							functionPassedByControllerAsAnArgToIndex(users);
						}
					});
				return;
			} else {
				functionPassedByControllerAsAnArgToIndex(users);
			}
		};
		this.create = newUser => {
			if (typeof(newUser) === 'object') {
				users.push(newUser);
			}
		};
		this.update = (updateUser, id, cb) => {
			let idx;
			for (let i = 0; i < users.length; i++) {
				if (users[i]._id == id) {
					users[i] = updateUser;
					idx = i;
					break;
				}
			}
			if (typeof(cb) === 'function') {
				cb(users[idx]);
			}
		};
		this.show = (idx, cb) => {
			$http.get(
				'http://ec2-35-167-132-85.us-west-2.compute.amazonaws.com/users/' + idx
			).then(
				function(data) {
					if (typeof(cb) === 'function') {
						user = data.data;
						cb(user);
					}
				});
		};
		this.delete = id => {
			for (let i = 0; i < users.length; i++) {
				if (users[i]._id == id) {
					users.splice(i, 1);
					break;
				}
			}
		};
	}

	return (new UserConstructor());
});
