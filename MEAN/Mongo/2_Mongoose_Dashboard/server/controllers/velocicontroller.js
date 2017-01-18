module.exports = (function() {
	var mongoose = require('mongoose'),
		Velociraptor = mongoose.model('Velociraptor');
	return {
		index: function(req, res) {
			Velociraptor.find({}, function(err, dinos) {
				res.render('index', {
					dinos: dinos
				});
			});
		},

		newDino: function(req, res) {
			res.render('new');
		},

		createDino: function(req, res) {
			var dino = new Velociraptor();
			dino.name = req.body.name;
			dino.age = req.body.age;
			dino.number_of_claws = req.body.number_of_claws;
			dino.save(function(err) {
				console.log(err);
			});
			res.redirect('/');
		},

		getDino: function(req, res) {
			Velociraptor.findOne({
				_id: req.params.id
			}, function(err, dino) {
				res.render('see', {dino: dino});
			});
		},

		editDino: function(req, res) {
			Velociraptor.findOne({
				_id: req.params.id
			}, function(err, dino) {
				res.render('edit', {dino: dino});
			});
		},

		saveEdit: function(req, res) {
			Velociraptor.findOne({
				_id: req.params.id
			}, function(err, dino) {
				dino.name = req.body.name;
				dino.age = req.body.age;
				dino.number_of_claws = req.body.number_of_claws;
				dino.save(function(err) {
					console.log(err);
				});
				res.redirect('/velociraptors/' + req.params.id);
			});
		},

		killDino: function(req, res) {
			Velociraptor.remove({ _id : req.params.id}, function(err) {
				console.log(err);
				res.redirect('/');
			});
		}
	};
})();
