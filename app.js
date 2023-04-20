const express = require('express');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const checkConnect = require("./src/middlewares/checkConnectBd");

// Роуты
const homeRouter = require('./src/routes/homeRouter');
const userRouters = require('./src/routes/usersRouter');
const profileRouter = require('./src/routes/profileRouter');
const listRouter = require('./src/routes/listRouter');
const cardRouter = require('./src/routes/cardRouter');
const fullCardRouter = require('./src/routes/fullCardRouter');

const app = express();
const PORT = process.env.PORT || 3000;

// Мидлварки
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

const sessionConfig = {
  name: 'newCookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  },
};
// * Подключи сессии как мидлу
app.use(session(sessionConfig));

// Мидлварка для просмотра сессии
// app.use((req, res, next) => {
//   next();
// });

// Проверка авторизации, мидлварка
const checkAuth = (request, response, next) => {
  if (request.session.userId) {
    next();
  } else {
    response.redirect('/');
  }
};

// Роуты
app.use('/', homeRouter);
app.use('/profile', checkAuth, profileRouter);
app.use('/users', userRouters);
app.use('/list-cards', listRouter);
app.use('/', cardRouter);
app.use('/full-card', fullCardRouter);
// app.use(pageNotFoundRouter);

// Старт сервера
app.listen(PORT, () => {
  console.log(`Сервер успешно запущен на порту! ${PORT}`);
});
