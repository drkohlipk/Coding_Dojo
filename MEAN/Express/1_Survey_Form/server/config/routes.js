const routes = require('express').Router();

routes.get('/', (req, res) => {
	let selections = [
		['Silicon Valley', 'Seattle', 'Los Angeles', 'Dallas', 'Washington, DC', 'Chicago', 'Berkeley', 'Orange County'],
		['Javascript', 'C#', 'Python', 'Ruby', 'Swift', 'HTML', 'CSS']
	];
	res.render('index', {selections: selections});
});

routes.post('/info', (req, res) => {
	res.render('info', {data: req.body});
});

module.exports = routes;
