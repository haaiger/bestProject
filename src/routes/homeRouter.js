const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const Home = require("../views/HomePage");

router.get("/", async (request, response) => {
  try {
    renderTemplate(Home, {}, request, response);
  } catch (error) {
    console.log("Ошибка запроса GET /", error);
  }
});

module.exports = router;
