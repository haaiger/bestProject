/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */

const seedUsers = require('../../src/helpers/seedUsers');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert("Users", seedUsers(10));
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
