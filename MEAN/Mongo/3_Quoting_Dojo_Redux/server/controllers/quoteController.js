module.exports = (function() {
	var mongoose = require('mongoose'),
		Quote = mongoose.model('Quote');
	return {
		index: function(req, res) {
			res.render('index');
		},

		createQuote: function(req, res) {
			var quote = new Quote();
			quote.quote = req.body.quote;
			quote.poster = req.body.name;
			quote.save(function(err) {
				if (err) {
					console.log(err);
					res.render('errors', {
						errors: err
					});
				} else {
					res.redirect('/quotes');
				}
			});
		},

		showQuotes: function(req, res) {
			Quote.find({}, function(err, data) {
				if (err) {
					console.log(err);
					res.redirect('/');
				} else {
					res.render('quotes', {
						quotes: data
					});
				}
			}).sort('-likes');
		},

		likeQuote: function(req, res) {
			Quote.findOne({
				_id: req.params.id
			}, function(err, quote) {
				quote.likes += 1;
				quote.save(function(err) {
					if (err) {
						console.log(err);
					}
				});
				res.redirect('/quotes');
			});
		}
	};
})();
