const { Category } = require("../../db/models");

module.exports = async function getFilters() {
  const categories = await Category.findAll();

  const rentPeriods = categories
    .map((item) => item.rentPeriod)
    .filter((item) => item);

  const typesOfHouses = categories
    .map((item) => item.typeHouse)
    .filter((item) => item);

  const regions = categories.map((item) => item.region).filter((item) => item);

  const filters = { rentPeriods, typesOfHouses, regions };
  //   console.log(filters, "^^^^^^^^^^^^^");
  return filters;
};
