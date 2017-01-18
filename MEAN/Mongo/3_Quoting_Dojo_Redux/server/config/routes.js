module.exports = function(app) {
	var quote = require('../controllers/quoteController');

	app.get('/', function(req, res) {
		quote.index(req, res);
	});

	app.post('/quotes', function(req, res) {
		quote.createQuote(req, res);
	});

	app.get('/quotes', function(req, res) {
		quote.showQuotes(req, res);
	});

	app.get('/like/:id', function(req, res) {
		quote.likeQuote(req, res);
	});
};
