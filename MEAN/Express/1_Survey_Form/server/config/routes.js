import express from 'express';
import path from 'path';
import bp from 'body-parser';

export default () => {
	var app = express();
	console.log('well, this loaded!');

	app.get('/', (req, res) => {
		console.log('yooooo');
		res.render('index');
	});

	app.post('/info', (req, res) => {
		console.log('Form data:', req.body);
		res.redirect('/');
	});

	app.get('/css_boilerplate', (req, res) => {
		console.log('yooooo');
		res.render('css_boilerplate.css');
	});
	
};
