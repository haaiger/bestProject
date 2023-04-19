const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const ListPage = require("../views/ListPage");
const { Houses } = require("../../db/models");

const rentPeriod = "Посуточно";
const typeHouse = "Комната";
const regions = "Центральный";

router.get(`/:rentPeriod/:typeHouse/:regions`, async (request, response) => {
  console.log(console.log("log"), request.params);
  try {
    const findHouses = await Houses.findAll({
      where: {
        rentPeriod: `${rentPeriod}`,
        typeHouse: `${typeHouse}`,
        regions: `${regions}`,
      },
    });
    console.log(findHouses);
    renderTemplate(ListPage, { findHouses }, request, response);
  } catch (error) {
    console.log("Ошибка GET запроса /:rentPeriod/:typeHouse/:regions", error);
  }
});

module.exports = router;
