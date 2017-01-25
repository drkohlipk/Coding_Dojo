import mongoose from 'mongoose';
const Message = mongoose.model('Message');
const Comment = mongoose.model('Comment');

module.exports = (() => {
	return {
		index(req, res) { //finds all messages in DB with associated comments
				Message.find({}).populate('comments').exec((err, data) => {
					if (err) {
						res.json(err);
					} else {
						res.json(data);
					} //if/else
				}); //Message.find
			},
			createMessage(req, res) { //creates a new messages and enters it into the DB
				let message = new Message(req.body);
				message.save((err, data) => {
					if (err) {
						res.json(err);
					} else {
						res.json(data);
					}
				});
			},
			createComment(req, res) { //creates a new comment and enters it into the DB
				Message.findOne({ //finds appropriate message first
					_id: req.body._message
				}, (err, data) => {
					if (err) {
						res.json(err);
					} else {
						let comment = new Comment(req.body); //creates a new comment from the entered information
						comment.save((errComm, dataComm) => { //saves comment (errComm and dataComm are so err and data are not confused (outside function))
							if (errComm) {
								res.json(errComm);
							} else {
								data.comments.push(dataComm._id); //adds comment to retrieved message
								data.save((errMess, dataMess) => { //saves the message
									res.json(dataMess);
								});
							}
						});
					}
				});
			}
	};
})();
