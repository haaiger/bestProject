const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");

const RentOrders = require("../views/RentOrders");

const { House } = require("../../db/models");
const { RentOrder } = require("../../db/models");

router.get("/", async (req, res) => {
  const userId = 1;
  const rentOrdersFromDB = await RentOrder.findAll({
    where: { userId },
    include: {
      model: House,
      attributes: ["rentPeriod", "typeHouse", "price", "address", "geoTag"],
    },
    raw: true,
  });

  renderTemplate(RentOrders, { rentOrdersFromDB }, req, res);
});

module.exports = router;
