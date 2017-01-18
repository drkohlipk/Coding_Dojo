var express = require('express'),
	path = require('path'),
	bp = require('body-parser'),
	app = express(),
	port = 8000;

app.use(bp.urlencoded({
	extended: true
}));
app.use(express.static(path.join(__dirname, './client')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, function() {
	console.log('Up on ' + port);
});
