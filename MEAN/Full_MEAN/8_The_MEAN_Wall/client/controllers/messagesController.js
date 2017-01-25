app.controller('messagesController', ['$scope', '$cookies', '$location',
	'messageFactory',
	function($scope, $cookies, $location, messageFactory) {
		$scope.username = ''; //creates an empty string for username
		$scope.messages = []; //creates an empty array to store messages and comments
		$scope.checkSesh = () => { //checks to see if the user is logged in
			if ($cookies.get('username')) { //if the cookie of 'username' exists...
				$scope.username = $cookies.get('username'); //store that username in $scope
			} else { //otherwise...
				$location.url('/'); //redirect user to log in
			}
		};
		$scope.makeMessage = () => { //creates a message
			if (!$scope.messageForm) { //if the textarea is left blank...
				alert('Please enter a message!'); //alert the user
			} else {
				$scope.messageForm.username = $cookies.get('username'); //attach the user's name to the message object
				messageFactory.makeMessage($scope.messageForm, data => { //send the data back to the factory to create a message
					messageFactory.getMessages(data => { //once the makeMessage function is done running...
						if (data.errors) {
							console.log(data.errors);
						} else {
							$scope.messages = data; //set the messages array to the returned data;
						}
					});
				});
				$scope.messageForm = {}; //clears messageForm
			}
		};
		$scope.createComment = (commentForm, id) => { //creates a comment for repective message
			if (!commentForm) { //if commentForm is empty...
				alert('Please enter a comment!');
			} else {
				commentForm.username = $cookies.get('username'); //add username to the commentForm object
				commentForm._message = id; //add the message id to the comment object
				messageFactory.createComment(commentForm, data => { //sends comment to factory
					messageFactory.getMessages(data => { //once comment is entered, get all messages
						if (data.errors) {
							console.log(data.errors);
						} else {
							$scope.messages = data;
						}
					});
				});
				delete $scope.commentForm; //clears out all commentForms
			}
		};
		$scope.logout = () => { //logs user out
			$cookies.remove('username'); //by removing username from cookies
			$location.url('/');
		};
		$scope.checkSesh(); //runs checkSesh upon page load
		messageFactory.getMessages(data => { //gets all messages/comments on page load
			if (data.errors) {
				console.log(data.errors);
			} else {
				$scope.messages = data;
			}
		});
	}
]);
