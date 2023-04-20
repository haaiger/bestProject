/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const Profile = require("../views/Profile");
const Favorites = require("../views/components/Favorites");
const {
  User, Favorite, Category, House,
} = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.session.userId },
      raw: true,
    });
    const userFavs = await Favorite.findAll({
      where: { userId: req.session.userId },
      raw: true,
    });

    const favsFull = [];
    for (let i = 0; i < userFavs.length; i++) {
      favsFull.push(
        await House.findOne({
          where: { id: userFavs[i].houseId },
          raw: true,
        }),
      );
    }

    const categories = await Category.findAll();
    const rentPeriods = categories
      .map((item) => item.rentPeriod)
      .filter((item) => item);
    const typesOfHouses = categories
      .map((item) => item.typeHouse)
      .filter((item) => item);
    const regions = categories
      .map((item) => item.region)
      .filter((item) => item);

    const filters = { rentPeriods, typesOfHouses, regions };

    renderTemplate(Profile, { user, favsFull, filters }, req, res);
  } catch (error) {
    console.log("Ошибка запроса GET /", error);
  }
});

router.post("/add", async (req, res) => {
  console.log(">>>>>>>>>>>", req.body, "0000000000000000000000000000000");

  const {
    rentPeriod,
    typeHouse,
    region,
    price,
    description,
    photo,
    address,
    geoTag,
    isRent,
    createdAt,
    updatedAt,
  } = req.body;

  const newAdvert = await House.create({
    rentPeriod,
    typeHouse,
    region,
    price,
    description,
    photo,
    address,
    geoTag,
    isRent,
    createdAt,
    updatedAt,
  });

  if (newAdvert) {
    res.json({ msg: "SUCCESS" });
  } else {
    res.json({ msg: "FAIL" });
  }
});

router.get("/favorites", async (request, response) => {
  const { userId } = request.session;
  const findFavorite = await Favorite.findAll({ where: { userId }, raw: true });
  const numbersAd = findFavorite.map((house) => house.houseId);
  const houses = await House.findAll({ raw: true, where: { id: numbersAd } });
  renderTemplate(Favorites, { houses, numbersAd }, request, response);
});

module.exports = router;
