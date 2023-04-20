const express = require("express");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();
const session = require("express-session");
const FileStore = require("session-file-store")(session);
// const checkConnect = require("./src/middlewares/checkConnectBd");

// Роуты
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const homeRouter = require("./src/routes/homeRouter");
const userRouters = require("./src/routes/users.routers");
const favoritesRouters = require("./src/routes/favorites.routers");
const rentOrderRouters = require("./src/routes/rent.routers");

const app = express();
const PORT = process.env.PORT || 3000;

// Мидлварки
app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const sessionConfig = {
  name: "newCookie",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "Секретное слово",
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
app.use((req, res, next) => {
  console.log("session=>", req.session);
  next();
});

// Проверка авторизации, мидлварка
const checkAuth = (request, response, next) => {
  if (request.session.userId) {
    next();
  } else {
    response.redirect("/");
  }
};

// Роуты
app.use("/", homeRouter);
app.use("/users", userRouters);
app.use("/favirites", favoritesRouters);
app.use("/rent-porder", rentOrderRouters);
// app.use(pageNotFoundRouter);

// Старт сервера
app.listen(PORT, () => {
  console.log(`Сервер успешно запущен на порту! ${PORT}`);
});
