/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FeedBacks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      number: {
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      question: {
        type: Sequelize.STRING,
      },
      remove: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('FeedBacks');
  },
};
