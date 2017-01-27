import users from '../controllers/users';
import questions from '../controllers/questions';
import answers from '../controllers/answers';
import comments from '../controllers/comments';

module.exports = app => {
	app.post('/users', users.create);
	app.get('/users/:id', users.getOne);
	app.get('/questions', questions.index);
	app.get('/categories', questions.getCat);
	app.post('/questions', questions.create);
	app.get('/questions/:id', questions.getOne);
	app.post('/answers', answers.create);
	app.get('/answers/upvote/:id', answers.upvote);
	app.get('/answers/downvote/:id', answers.downvote);
	app.post('/comments', comments.create);
};
