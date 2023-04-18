/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "Вася",
        middleName: "Вася",
        lastName: "Вася",
        email: "Вася@example.com",
        phone: "1111111111",
        password: "123",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Гена",
        middleName: "Гена",
        lastName: "Гена",
        email: "Гена@example.com",
        phone: "2222222222",
        password: "123",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Петя",
        middleName: "Петя",
        lastName: "Петя",
        email: "Петя@example.com",
        phone: "3333333333",
        password: "123",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
