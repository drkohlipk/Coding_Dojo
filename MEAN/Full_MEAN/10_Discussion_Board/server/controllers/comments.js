import mongoose from 'mongoose';
const Answer = mongoose.model('Answer');
const User = mongoose.model('User');
const Comment = mongoose.model('Comment');

module.exports = (() => {
	return {
		create(req, res) {
			let comment = new Comment(req.body);
			comment.save((err, data) => {
				if (err) res.json(err);
				else {
					User.update({
						_id: comment._user
					}, {
						'$push': {
							'comments': comment._id
						}
					}, (errUser, dataUser) => {
						if (errUser) console.log(errUser);
						else console.log(dataUser);
					});
					Answer.update({
						_id: comment._answer
					}, {
						'$push': {
							'comments': comment._id
						}
					}, (errAnswer, dataAnswer) => {
						if (errAnswer) console.log(errAnswer);
					});
				}
			});
		}
	};
})();
