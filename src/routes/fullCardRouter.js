const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");

const { House, Favorite } = require("../../db/models");
const FullCard = require("../views/components/FullCard");

router.get(`/:id`, async (request, response) => {
  const { id } = request.params;

  const oneHouseFronDB = await House.findOne({ where: { id }, raw: true });

  const findFavorite = await Favorite.findAll({
    where: { userId: request.session.userId },
    raw: true,
  });
  const numbersAd = findFavorite.map((ad) => ad.houseId);

  console.log(numbersAd);

  renderTemplate(FullCard, { oneHouseFronDB, numbersAd, id }, request, response);
});

module.exports = router;
