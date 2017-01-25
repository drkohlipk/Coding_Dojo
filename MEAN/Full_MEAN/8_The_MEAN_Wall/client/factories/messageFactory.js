app.factory('messageFactory', ['$http', function($http) {
	return {
		getMessages(cb) { //makes a call to the back end to retrieve all messages
				$http.get('/messages').then(response => {
					if (typeof(cb) === 'function') {
						cb(response.data);
					}
				});
			},
			makeMessage(message, cb) { //sends message data to server to create new message
				$http.post('/messages', message).then(response => {
					if (typeof(cb) === 'function') {
						cb(response.data);
					}
				});
			},
			createComment(comment, cb) { //sends comment data to server to create new comment
				$http.post('/messages/comment', comment).then(response => {
					if (typeof(cb) === 'function') {
						cb(response.data);
					}
				});
			}
	};
}]);
