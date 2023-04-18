/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("TypeHouses", [
      {
        typeHouseName: "1-к. квартира",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeHouseName: "2-к. квартира",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("TypeHouses", null, {});
  },
};
