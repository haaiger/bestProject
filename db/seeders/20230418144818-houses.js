/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Houses", [
      {
        categoryId: 1,
        typeHouseId: 2,
        regionId: 2,
        price: 1000,
        description: "Красивая",
        photo: "фото",
        address: "Герцена 6",
        geoTag: "1234,5678",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2,
        typeHouseId: 1,
        regionId: 1,
        price: 1500,
        description: "Просторная",
        photo: "фото",
        address: "Ленана 5",
        geoTag: "5678,9101",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1,
        typeHouseId: 2,
        regionId: 2,
        price: 1000,
        description: "Уютная",
        photo: "фото",
        address: "Мира 20",
        geoTag: "1234,5678",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Houses", null, {});
  },
};
