/* eslint-disable no-unused-vars */
/** @type {import('sequelize').Sequelize} */

const seedCategories = require("../../src/helpers/seedCategories");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", seedCategories(10));
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
