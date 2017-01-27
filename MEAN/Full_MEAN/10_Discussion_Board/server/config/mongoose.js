import mongoose from 'mongoose';
import path from 'path';
import fs from 'fs';
const models_path = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/discussionboard');
fs.readdirSync(models_path).forEach(file => {
	if (file.indexOf('.js') >= 0) {
		require(`${models_path}/${file}`);
	}
});
