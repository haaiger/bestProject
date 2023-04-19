const express = require("express");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();
// const checkConnect = require("./src/middlewares/checkConnectBd");
//123
// Роуты
const homeRouter = require("./src/routes/homeRouter");
const userRouters = require("./src/routes/users.routers");
const profileRouter = require("./src/routes/profileRouter");

const app = express();
const PORT = process.env.PORT || 3000;

const session = require("express-session");
const FileStore = require("session-file-store")(session);

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
// app.use((req, res, next) => {
//   console.log("session=>", req.session);
//   next();
// });

// Роуты
app.use("/", homeRouter);
app.use("/profile", profileRouter);
app.use("/users", userRouters);
// app.use(pageNotFoundRouter);

// Старт сервера
app.listen(PORT, () => {
  console.log(`Сервер успешно запущен на порту! ${PORT}`);
});
