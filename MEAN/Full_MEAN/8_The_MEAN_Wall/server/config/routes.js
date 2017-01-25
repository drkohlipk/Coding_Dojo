import messages from '../controllers/messagesController';
import users from '../controllers/usersController';

module.exports = app => {
	app.get('/users', users.index);
	app.post('/users', users.create);
	app.get('/users/:id', users.getOne);
	app.get('/messages', messages.index);
	app.post('/messages', messages.createMessage);
	app.post('/messages/comment', messages.createComment);
};
