import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
const models_path = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/friendsDB');
fs.readdirSync(models_path).forEach(file => {
	if (file.indexOf('.js') >= 0) {
		require(models_path + '/' + file);
	}
});
