const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");

const { House } = require("../../db/models");
const FullCard = require("../views/components/FullCard");

router.get(`/`, (request, response) => {
  renderTemplate(FullCard, {}, request, response);
});

module.exports = router;
