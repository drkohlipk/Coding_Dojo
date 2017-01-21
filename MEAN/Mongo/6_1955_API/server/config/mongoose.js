var mongoose = require('mongoose'),
	path = require('path'),
	fs = require('fs'),
	models_path = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/1955');
fs.readdirSync(models_path).forEach(function(file) {
	if (file.indexOf('.js') >= 0) {
		require(models_path + '/' + file);
	}
});
