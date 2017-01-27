import mongoose from 'mongoose';
const Answer = mongoose.model('Answer');
const User = mongoose.model('User');
const Question = mongoose.model('Question');

module.exports = (() => {
	return {
		create(req, res) {
				let answer = new Answer(req.body);
				answer.save((err, data) => {
					if (err) res.json(err);
					else {
						User.update({
							_id: answer._user
						}, {
							'$push': {
								'answers': answer._id
							}
						}, (errUser, dataUser) => {
							if (errUser) console.log(errUser);
						});
						Question.update({
							_id: answer._question
						}, {
							$push: {
								'answers': answer._id
							}
						}, (errQuestion, dataQuestion) => {
							if (errQuestion) console.log(errQuestion);
						});
					}
				});
			},
			upvote(req, res) {
				Answer.update({
					_id: req.params.id
				}, {
					$inc: {
						'upvote': 1
					}
				});
			},
			downvote(req, res) {
				Answer.update({
					_id: req.params.id
				}, {
					$inc: {
						'downvote': 1
					}
				});
			}
	};
})();
