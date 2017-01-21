var express = require('express'),
	path = require('path'),
	bp = require('body-parser'),
	app = express(),
	port = 8000;

app.use(bp.json());
// app.use(express.static(path.join(__dirname, 'client')))

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, function() {
	console.log("You're on on " + port + " radio bro!");
});
