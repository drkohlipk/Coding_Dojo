var mongoose = require('mongoose'),
	Person = mongoose.model('Person');

module.exports = (function() {
	return {
		index: function(req, res) {
			Person.find({}, function(err, people) {
				res.json(people);
			});
		},
		new: function(req, res) {
			var person = new Person(req.params);
			person.save(function(err) {
				if (err) {
					console.log(err);
				}
				res.redirect('/');
			});
		},
		remove: function(req, res) {
			Person.findOne({
				name: req.params.name
			}, function(err, person) {
				person.remove(function(err) {
					if (err) {
						console.log(err);
					}
					res.redirect('/');
				});
			});
		},
		see: function(req, res) {
			Person.findOne({
				name: req.params.name
			}, function(err, person) {
				if (err) {
					console.log(err);
				}
				res.json(person);
			});
		}
	};
})();
