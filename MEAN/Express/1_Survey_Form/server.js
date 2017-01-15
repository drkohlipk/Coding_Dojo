import express from 'express';
import path from 'path';
import bp from 'body-parser';
import routes from './server/config/routes';
const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(8000, () => console.log('Listening on port 8000'));