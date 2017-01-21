var people = require('../controllers/personController');

module.exports = function(app) {
	app.get('/', function(req, res) {
		people.index(req, res);
	});

	app.get('/new/:name', function(req, res) {
		people.new(req, res);
	});

	app.get('/remove/:name', function(req, res) {
		people.remove(req, res);
	});

	app.get('/:name', function(req, res) {
		people.see(req, res);
	});
};
