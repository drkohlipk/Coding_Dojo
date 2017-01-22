app.factory('userFactory', function() {

	//Bonus: convert these callbacks to promises!

	function UserConstructor() {

		var users = [{
			name: "Mike"
		}, {
			name: "Dan"
		}];

		this.index = cb => {
			if (typeof(cb) === 'function') {
				cb(users);
			}
		};
		this.create = newUser => {
			if (typeof(newUser) === 'object') {
				users.push(newUser);
			}
		};
		this.update = (updateUser, idx, cb) => {
			if (users[idx]) {
				for (let key in updateUser) {
					users[idx][key] = updateUser[key];
				}
			}
			if (typeof(cb) === 'function') {
				cb(users[idx]);
			}
		};
		this.show = (idx, cb) => {
			if (typeof(cb) === 'function') {
				cb(users[idx]);
			}
		};
		this.delete = (idx, cb) => {
			if (users[idx]) {
				users.splice(idx, 1);
			}
		};
	}

	return (new UserConstructor());
});
