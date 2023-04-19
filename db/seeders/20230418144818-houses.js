/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Houses', [
      {
        rentPeriod: 'Суточно',
        typeHouse: 'Квартира',
        region: 'Ленинский',
        price: 1000,
        description: 'Красивая',
        photo: 'фото',
        address: 'Герцена 6',
        geoTag: '1234,5678',
        isRent: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rentPeriod: 'Суточно',
        typeHouse: 'Дом',
        region: 'Октябрьский',
        price: 1500,
        description: 'Просторная',
        photo: 'фото',
        address: 'Ленана 5',
        geoTag: '5678,9101',
        isRent: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rentPeriod: 'На длительный срок',
        typeHouse: 'Комната',
        region: 'Октябрьский',
        price: 1000,
        description: 'Уютная',
        photo: 'фото',
        address: 'Мира 20',
        geoTag: '1234,5678',
        isRent: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Houses', null, {});
  },
};
