/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("RentOrders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Users",
          },
          key: "id",
        },
      },
      houseId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Houses",
          },
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("RentOrders");
  },
};
