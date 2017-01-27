app.controller('userController', ['$scope', '$cookies', '$location',
	'userFactory',
	function(
		$scope, $cookies, $location, userFactory) {
		$scope.errors = [];
		$scope.checkSesh = () => { //checks to see if the user has been logged in or not
			if ($cookies.get('name')) { //if they have, reroute them to the dashboard
				$location.url('/dash');
			}
		};
		$scope.login = () => {
			if (!$scope.newUser) {
				$scope.errors.push('Please enter a name');
				document.getElementById('nameCursor').focus(); //put the user's cursor in the username input field
			} else {
				userFactory.login($scope.newUser, data => {
					if (data.errors) {
						$scope.errors = data.errors;
						document.getElementById('nameCursor').focus(); //put the user's cursor in the username input field
					} else {
						var expireDate = new Date(); //create a new date (now)
						expireDate.setDate(expireDate.getDate() + 1); //add a day to that date/time
						$cookies.put('name', data.name, { //set the username cookie to the user's username
							'expires': expireDate //and set the cookie to expire in 24 hours
						});
						$cookies.put('id', data._id, { //set the username cookie to the user's username
							'expires': expireDate //and set the cookie to expire in 24 hours
						});
						$location.url('/dash');
					}
				});
			}
		};
		$scope.checkSesh(); //upon reaching the login page, check to see if the user has already logged in
		document.getElementById('nameCursor').focus(); //put the user's cursor in the username input field
	}
]);
