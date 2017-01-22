app.factory('userFactory', () => {
	let users = [];
	let factory = {
		addUser: user => {
			users.push(user);
		},
		getUsers: cb => {
			cb(users);
		},
		removeUser: user => {
			users.splice(users.indexOf(user), 1);
		}
	};
	return factory;
});
