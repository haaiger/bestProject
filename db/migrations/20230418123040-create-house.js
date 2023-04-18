"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Houses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Categories",
          },
          key: "id",
        },
      },
      typeHouseId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "TypeHouses",
          },
          key: "id",
        },
      },
      regionId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Regions",
          },
          key: "id",
        },
      },
      price: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      photo: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      geoTag: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Houses");
  },
};
