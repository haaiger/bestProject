const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const Profile = require("../views/Profile");
const { User, Favorite } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.session.userId } });
    const userFavs = await Favorite.findAll({
      where: { userId: req.session.userId },
      raw: true,
    });
    renderTemplate(Profile, { user, userFavs }, req, res);
  } catch (error) {
    console.log("Ошибка запроса GET /", error);
  }
});

module.exports = router;
