var messages = require('../controllers/messageController');
module.exports = function(app) {
	app.get('/', function(req, res) {
		messages.index(req, res);
	});

	app.post('/message', function(req, res) {
		messages.postMessage(req, res);
	});

	app.post('/comment/:id', function(req, res) {
		messages.postComment(req, res);
	});
};
