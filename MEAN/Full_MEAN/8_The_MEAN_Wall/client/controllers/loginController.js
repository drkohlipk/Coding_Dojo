app.controller('loginController', ['$scope', '$cookies', '$location',
	'userFactory',
	function($scope, $cookies, $location, userFactory) {
		$scope.errors = []; //empty array to store errors
		$scope.checkSesh = () => { //checks to see if the user has been logged in or not
			if ($cookies.get('username')) { //if they have, reroute them to the dashboard
				$location.url('/dash');
			}
		};
		$scope.login = () => { //logs user in based on entered username
			$scope.errors = []; //clears out the errors array
			if (!$scope.user) { //if the username field is left blank...
				$scope.errors.push('Please enter a username'); //push this error to the array
				document.getElementById('cursorUN').focus(); //put the user's cursor back into the username input field
			} else { //if the user enters a username...
				userFactory.login($scope.user, data => { //send the username to the factory to attempt login
					if (data.errors) { //if errors are returned, push them to the array
						for (let key in data.errors) {
							$scope.errors.push(data.errors[key].message);
						}
						document.getElementById('cursorUN').focus(); //put focus back onto the username input field
					} else { //if there are no errors...
						var expireDate = new Date(); //create a new date (now)
						expireDate.setDate(expireDate.getDate() + 1); //add a day to that date/time
						$cookies.put('username', data.username, { //set the username cookie to the user's username
							'expires': expireDate //and set the cookie to expire in 24 hours
						});
						$location.url('/dash'); //reroute the user to the dashboard
					}
				});
			}
		};
		$scope.checkSesh(); //upon reaching the login page, check to see if the user has already logged in
		document.getElementById('cursorUN').focus(); //put the user's cursor in the username input field
	}
]);
