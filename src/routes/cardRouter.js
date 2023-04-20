const router = require("express").Router();
const { Favorite } = require("../../db/models");

router.post("/favorites/new", async (request, response) => {
  try {
    const { userId, houseId } = request.body;

    const findFavorite = await Favorite.findOne({
      where: { userId: 1, houseId },
      raw: true,
    });

    if (findFavorite) {
      return response.json({ message: "Уже добавлено в избранное" });
    }

    const favorite = await Favorite.create({ userId, houseId });
    response.status(201).json(favorite);
  } catch (error) {
    console.error("Ошибка POST запроса /favorites/new", error);
  }
});

router.delete("/favorites/remove", async (request, response) => {
  try {
    const { userId, houseId } = request.body;
    console.log(request.body);
    const favorite = await Favorite.findOne({
      where: { userId, houseId },
    });

    if (!favorite) {
      return response.json({ error: "Избранное не найдено" });
    }
    await favorite.destroy();
    response.json({ message: "Удалено из избранного" });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
