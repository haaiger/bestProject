const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");

const { House } = require("../../db/models");
const FullCard = require("../views/components/FullCard");

router.get(`/:id`, async (request, response) => {
  const { id } = request.params;

  const oneHouseFronDB = await House.findOne({ where: { id }, raw: true });

  renderTemplate(FullCard, { oneHouseFronDB }, request, response);
});

module.exports = router;
