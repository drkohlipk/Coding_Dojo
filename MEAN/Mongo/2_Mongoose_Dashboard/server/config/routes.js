module.exports = function(app) {
	var velociraptor = require('../controllers/velocicontroller');

	app.get('/', function(req, res) {
		velociraptor.index(req, res);
	});

	app.get('/velociraptors/new', function(req, res) {
		velociraptor.newDino(req, res);
	});

	app.post('/velociraptors', function(req, res) {
		velociraptor.createDino(req, res);
	});

	app.get('/velociraptors/:id', function(req, res) {
		velociraptor.getDino(req, res);
	});

	app.get('/velociraptors/edit/:id', function(req, res) {
		velociraptor.editDino(req, res);
	});

	app.post('/velociraptors/:id', function(req, res) {
		velociraptor.saveEdit(req, res);
	});

	app.get('/velociraptors/destroy/:id', function(req, res) {
		velociraptor.killDino(req, res);
	});
};
