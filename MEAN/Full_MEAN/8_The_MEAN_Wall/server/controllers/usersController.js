import mongoose from 'mongoose'; //var mongoose = require('mongoose')
const User = mongoose.model('User');

module.exports = (() => {
	return {
		index(req, res) { //retrieves all users from the DB
				User.find({}, (err, data) => {
					if (err) {
						res.json(err);
					} else {
						res.json(data);
					} //if/else
				}); //User.find
			},
			create(req, res) { //creates new user based on entered username
				User.findOne({ //searches for a user with the same username already in the DB
					username: req.body.username
				}, (err, data) => {
					if (err) {
						res.json(err);
					} else {
						if (data) { //if the user DOES exist...
							res.json(data); //return that user information
						} else { //otherwise, create the user and save them in the DB
							let user = new User(req.body);
							user.save((errSave, dataSave) => { //errSave and dataSave are created so there's no confusion with err and data from the outside function
								if (errSave) {
									res.json(errSave);
								} else {
									res.json(dataSave);
								} //user.save if/else
							}); //user.save
						} //if (data) if/else
					} //User.findOne if/else
				}); //User.findOne
			},
			getOne(req, res) { //retrieves one user from the DB based on username
				User.findOne({
					username: req.body.username
				}, (err, data) => {
					if (err) {
						res.json(err);
					} else {
						res.json(data);
					}
				}); //User.findOne
			}
	};
})();
