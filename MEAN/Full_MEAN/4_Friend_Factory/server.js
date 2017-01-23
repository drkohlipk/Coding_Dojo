import express from 'express';
import path from 'path';
import bp from 'body-parser';
const app = express(),
	port = 8000;

app.use(bp.json());
app.use(express.static(path.join(__dirname, './client/bower_components')));
app.use(express.static(path.join(__dirname, './client')));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, () => {
	console.log(`Up on ${port}!`);
});
