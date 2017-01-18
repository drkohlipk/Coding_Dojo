var mongoose = require('mongoose'),
	fs = require('fs'),
	path = require('path'),
	models_path = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/quoting_dojo_redux');
fs.readdirSync(models_path).forEach(function(file) {
	if (file.indexOf('.js') >= 0) {
		require(models_path + '/' + file);
	}
});
