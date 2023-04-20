const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");

const Favorites = require("../views/Favorites");

const { House } = require("../../db/models");
const { Favorite } = require("../../db/models");

router.get("/", async (req, res) => {
  const userId = 1;
  const favoritesFromDB = await Favorite.findAll({
    where: { userId },
    include: {
      model: House,
      attributes: [
        "rentPeriod",
        "typeHouse",
        "region",
        "price",
        "address",
        "geoTag",
      ],
    },
    raw: true,
  });

  console.log(favoritesFromDB, "favoritesFromDBfavoritesFromDB");
  renderTemplate(Favorites, { favoritesFromDB }, req, res);
});

module.exports = router;
