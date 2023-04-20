const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const ListPage = require("../views/ListPage");
const { House } = require("../../db/models");

router.get(`/:rentPeriod/:typeHouse/:region`, async (request, response) => {
  try {
    const { rentPeriod, typeHouse, region } = request.params;
    const findHouses = await House.findAll({
      where: {
        rentPeriod,
        typeHouse,
        region,
      },
      raw: true,
    });
    renderTemplate(
      ListPage,
      {
        findHouses, rentPeriod, typeHouse, region,
      },
      request,
      response,
    );
  } catch (error) {
    console.log("Ошибка GET запроса /:rentPeriod/:typeHouse/:region", error);
  }
});

module.exports = router;
