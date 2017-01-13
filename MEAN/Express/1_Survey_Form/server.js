import express from 'express';
import path from 'path';
import bp from 'body-parser';
// import routes from './server/config/routes';

var app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	let selections = [
		['Silicon Valley', 'Seattle', 'Los Angeles', 'Dallas', 'Washington, DC', 'Chicago', 'Berkeley', 'Orange County'],
		['Javascript', 'C#', 'Python', 'Ruby', 'Swift', 'HTML', 'CSS']
	];
	res.render('index', {selections: selections});
});

app.post('/info', (req, res) => {
	res.render('info', {data: req.body});
});

app.listen(8000, () => console.log('Listening on port 8000'));