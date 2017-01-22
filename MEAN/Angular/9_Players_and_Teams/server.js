import express from 'express';
import path from 'path';
import bp from 'body-parser';
const app = express(),
	port = 8000;

app.use(bp.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './client/bower_components')));

app.listen(port, () => {
	console.log(`You are now listening on port ${port}!`);
});
