import friends from '../controllers/friends';

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept");
		res.setHeader('Access-Control-Allow-Methods',
			'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		next();
	});
	app.get('/friends', friends.index);
	app.get('/friends/:id', friends.show);
	app.post('/friends', friends.create);
	app.post('/friends/update', friends.update);
	app.delete('/friends/:id', friends.delete);
};
