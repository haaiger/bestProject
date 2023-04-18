/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        categoryName: "Посуточно",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: "На длитеный срок",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: "Краткосрочно",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
