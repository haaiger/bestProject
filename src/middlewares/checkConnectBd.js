const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB);

async function checkConnect(req, res, next) {
  try {
    await sequelize.authenticate();
    res.locals.bd = "База данных успешно подключена!";
    console.log("База данных успешно подключена!");
    next();
  } catch (error) {
    console.log("Ошибка подключения базы данных!", error);
    res.send(error);
  }
}

module.exports = checkConnect;
