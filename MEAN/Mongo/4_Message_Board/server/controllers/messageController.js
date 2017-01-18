var mongoose = require('mongoose'),
	Message = mongoose.model('Message'),
	Comment = mongoose.model('Comment');
module.exports = {
	index: function(req, res) {
		Message.find({}).populate('comments').exec(function(err, messages) {
			if (err) {
				console.log(err);
			}
			res.render('index', {
				messages: messages
			});
		});
	},

	postMessage: function(req, res) {
		var message = new Message(req.body);
		message.save(function(err) {
			if (err) {
				console.log(err);
			}
			res.redirect('/');
		});
	},

	postComment: function(req, res) {
		Message.findOne({
			_id: req.params.id
		}, function(err, message) {
			var comment = new Comment(req.body);
			comment._message = message._id;
			comment.save(function(err) {
				message.comments.push(comment);
				message.save(function(err) {
					if (err) {
						console.log(err);
					}
					res.redirect('/');
				});
			});
		});
	}
};
