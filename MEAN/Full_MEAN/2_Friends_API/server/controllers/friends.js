import mongoose from 'mongoose';
const Friend = mongoose.model('Friend');

module.exports = (() => {
	return {
		index: (req, res) => {
			Friend.find({}, (err, friends) => {
				if (err) {
					console.log(err);
				}
				res.json({
					friends
				});
			});
		},
		create: (req, res) => {
			let friend = new Friend(req.body);
			friend.save((err) => {
				if (err) {
					console.log(err);
				}
				res.redirect('/friends');
			});
		},
		update: (req, res) => {
			Friend.findOne({
				_id: req.params.id
			}, (err, friend) => {
				if (err) {
					console.log(err);
				}
				friend.name = req.body.name;
				friend.save(err => {
					if (err) {
						console.log(err);
					}
					res.redirect('/friends');
				});
			});
		},
		delete: (req, res) => {
			Friend.remove({
				_id: req.params.id
			}, err => {
				if (err) {
					console.log(err);
				}
				res.redirect('/friends');
			});
		},
		show: (req, res) => {
			Friend.findOne({
				_id: req.params.id
			}, (err, friend) => {
				if (err) {
					console.log(err);
				}
				res.json(friend);
			});
		}
	};
})();
