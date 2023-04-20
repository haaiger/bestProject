const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const Home = require("../views/HomePage");
// const { Houses } = require("../../db/models");

router.get("/", async (request, response) => {
  try {
    // const count = await Houses.count();

    // // Получаем уникальные значения.
    // const offsets = new Set();
    // while (offsets.size < 3) {
    //   const randomOffset = Math.floor(Math.random() * count);
    //   offsets.add(randomOffset);
    // }

    // // Поиск дома.
    // const findThreeRandomAds = await Promise.all(
    //   Array.from(offsets).map((offset) => Houses.findOne({
    //     offset,
    //     limit: 1,
    //   })),
    // );

    renderTemplate(Home, {}, request, response);
  } catch (error) {
    console.log("Ошибка запроса GET /", error);
  }
});

module.exports = router;
