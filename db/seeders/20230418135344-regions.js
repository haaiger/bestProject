/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Regions", [
      {
        regionName: "Центральный",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        regionName: "Ленинский",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        regionName: "Октябрьский",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Regions", null, {});
  },
};
