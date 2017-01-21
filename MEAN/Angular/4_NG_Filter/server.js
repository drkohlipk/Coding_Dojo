var express = require('express'),
	path = require('path'),
	bp = require('body-parser'),
	app = express(app),
	port = 8000;

app.use(bp.json());
app.use(express.static(path.join(__dirname, './client')));

app.listen(port, function() {
	console.log('Up on ' + port);
});
