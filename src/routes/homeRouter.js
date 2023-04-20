const router = require("express").Router();
const Sequelize = require("sequelize");
const renderTemplate = require("../lib/renderTemplate");
const Contact = require("../views/Contact");
const Home = require("../views/HomePage");
const YandexMap = require("../views/MapComponent");
const { FeedBacks, Favorite } = require("../../db/models");
const { House } = require("../../db/models");

router.get("/", async (request, response) => {
  try {
    const findFavorite = await Favorite.findAll({
      where: { userId: request.session.userId },
      raw: true,
    });
    const numbersAd = findFavorite.map((ad) => ad.houseId);
    renderTemplate(Home, { numbersAd }, request, response);
  } catch (error) {
    console.log("Ошибка запроса GET /", error);
  }
console.log(FeedBacks, "Feedback<<<<<<");

router.get("/", async (request, response) => {
  const HouseFromDB = await House.findAll({
    limit: 10,
    order: Sequelize.literal("random()"),
    raw: true,
  });

  renderTemplate(Home, { HouseFromDB }, request, response);
});

// router.get('/map', async (req, res) => {
//   try {
//     renderTemplate(YandexMap, {}, res, req);
//   } catch (error) {
//     console.log('Ошибка запроса GET /', error);
//   }
// });

router.get("/contact", (req, res) => {
  renderTemplate(Contact, {}, req, res);
});

router.post("/feedBack", async (req, res) => {
  try {
    console.log(req.body, "<<<<<<REQ BODY");
    const {
      name, number, email, question,
    } = req.body;

    const newQuestion = await FeedBacks.create({
      name,
      number,
      email,
      question,
    });

    res.json(newQuestion);
  } catch (err) {
    console.log(err, "ошибка в руте feedBack");
  }
});

module.exports = router;
