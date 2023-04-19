/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    [
      {
        rentPeriod: "Суточно",
        typeHouse: "Квартира",
        region: "Ленинский",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rentPeriod: "На длительный срок",
        typeHouse: "Комната",
        region: "Октябрьский",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rentPeriod: null,
        typeHouse: "Дом",
        region: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
