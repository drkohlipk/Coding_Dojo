import mongoose from 'mongoose';
const User = mongoose.model('User');

module.exports = (() => {
	return {
		create(req, res) {
				User.findOne({
					name: req.body.name
				}, (err, data) => {
					if (err) console.log(err);
					else {
						if (data) res.json(data);
						else {
							let user = new User(req.body);
							user.save((errSave, dataSave) => {
								if (errSave) res.json(errSave);
								else res.json(dataSave);
							});
						}
					}
				});
			},
			getOne(req, res) {
				User.findOne({
					_id: req.params.id
				}, (err, data) => {
					if (err) console.log(err);
					else res.json(data);
				});
			}
	};
})();
