import mongoose from 'mongoose';
const Friend = mongoose.model('Friend');

module.exports = (() => {
	return {
		index: (req, res) => {
			Friend.find({}, (err, friends) => {
				if (err) {
					console.log(err);
				}
				res.json(friends);
			});
		},
		create: (req, res) => {
			let friend = new Friend(req.body);
			friend.save(err => {
				if (err) {
					console.log(err);
				}
				res.json(friend);
			});
		},
		update: (req, res) => {
			Friend.findOne({
				_id: req.params.id
			}, (err, friend) => {
				if (err) {
					console.log(err);
				}
				friend.firstName = req.body.lastName;
				friend.lastName = req.body.lastName;
				friend.birthday = req.body.birthday;
				friend.save(err => {
					if (err) {
						console.log(err);
					}
					res.json(friend);
				});
			});
		},
		delete: (req, res) => {
			Friend.remove({
				_id: req.params.id
			}, (err, data) => {
				if (err) {
					console.log(err);
				}
				res.json(data);
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
