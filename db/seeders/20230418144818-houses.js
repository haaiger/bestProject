/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */

const generateRandomHouses = require("../../src/helpers/seedHouse");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Houses", generateRandomHouses(100));
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Houses", null, {});
  },
};
