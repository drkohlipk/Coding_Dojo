import mongoose from 'mongoose';
const Question = mongoose.model('Question');
const User = mongoose.model('User');
const Category = mongoose.model('Category');

module.exports = (() => {
	return {
		index(req, res) {
				Question.find({})
					.populate('_category _user')
					.exec((err, data) => {
						if (err) console.log(err);
						else res.json(data);
					});
			},
			create(req, res) {
				let question = new Question(req.body);
				question.save((err, data) => {
					if (err) res.json(err);
					else {
						User.update({
							_id: question._user
						}, {
							'$push': {
								'questions': question._id
							}
						}, (errUser, dataUser) => {
							if (errUser) console.log(errUser);
							else console.log(dataUser);
						});
						Category.update({
							_id: question._category
						}, {
							'$push': {
								'questions': question._id
							}
						}, (errCat, dataCat) => {
							if (errCat) console.log(errCat);
						});
					}
				});
			},
			getOne(req, res) {
				Question.findOne({
					_id: req.params.id
				}, (err, data) => {
					if (err) console.log(err);
					else res.json(data);
				});
			},
			getCat(req, res) {
				Category.find({}, (err, data) => {
					if (err) console.log(err);
					else res.json(data);
				});
			}
	};
})();
