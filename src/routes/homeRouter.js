const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const Contact = require("../views/Contact");
const Home = require("../views/HomePage");
// const YandexMap = require('../views/MapComponent');
const AdminGmail = require("../views/AdminGmail");
const { route } = require("./profileRouter");
const Sequelize = require("sequelize");
const { FeedBacks, Favorite } = require("../../db/models");
const { House } = require("../../db/models");

const getFilters = require("../helpers/getFilters");

router.get("/", async (request, response) => {
  try {
    const HouseFromDB = await House.findAll({
      limit: 10,
      order: Sequelize.literal("random()"),
      raw: true,
    });
    const filters = await getFilters();
    if (request.session.userId) {
      const findFavorite = await Favorite.findAll({
        where: { userId: request.session.userId },
        raw: true,
      });
      const numbersAd = findFavorite.map((ad) => ad.houseId);
      renderTemplate(
        Home,
        { filters, HouseFromDB, numbersAd },
        request,
        response
      );
    } else {
      renderTemplate(Home, { filters, HouseFromDB }, request, response);
    }
  } catch (error) {
    console.log("Ошибка запроса GET /", error);
  }
});

router.get("/contact", (req, res) => {
  renderTemplate(Contact, {}, req, res);
});

router.post("/feedBack", async (req, res) => {
  try {
    const { name, number, email, question } = req.body;

    const newQuestion = await FeedBacks.create({
      name,
      number,
      email,
      question,
      remove: false,
    });

    res.json(newQuestion);
  } catch (err) {
    console.log(err, "ошибка в руте feedBack");
  }
});

router.get("/admin/mail", async (req, res) => {
  try {
    const mail = await FeedBacks.findAll();

    renderTemplate(AdminGmail, { mail }, req, res);
  } catch (err) {
    console.log(err, "ошибка в руте admin/mail get");
  }
});
router.put("/admin/mail", async (req, res) => {
  try {
    const { idEl } = req.body;
    await FeedBacks.update(
      { remove: true },
      {
        where: {
          id: idEl,
        },
      }
    );

    res.json();
  } catch (err) {
    console.log(err, "ошибка в руте admin/mail post");
  }
});
router.get("/admin/mail/closed", async (req, res) => {
  try {
    const { remove } = req.query;
    console.log(remove, "<<<remove");
    console.log(remove);
    const response = await FeedBacks.findAll({ where: { remove } });

    res.json(response);
  } catch (err) {
    console.log(err, "ошибка в руте admin/mail post");
  }
});
router.delete("/admin/mail/remove/all", async (req, res) => {
  try {
    await FeedBacks.destroy({ where: { remove: true } });
    res.end();
  } catch (err) {
    console.log(err, "ошибка в руте remove/all");
  }
});

module.exports = router;
