const express = require("express");
const path = require("path");
const morgan = require("morgan");
// const checkConnect = require("./src/middlewares/checkConnectBd");

// Роуты
const homeRouter = require("./src/routes/homeRouter");

const app = express();
const PORT = process.env.PORT || 3000;

// Мидлварки
app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// Роуты
app.use("/", homeRouter);
// app.use(pageNotFoundRouter);

// Старт сервера
app.listen(PORT, () => {
  console.log(`Сервер успешно запущен на порту! ${PORT}`);
});
