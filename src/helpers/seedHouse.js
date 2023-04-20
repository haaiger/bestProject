/* eslint-disable import/no-import-module-exports */
/* eslint-disable no-plusplus */
const { faker } = require('@faker-js/faker');

function generateRandomHouseData() {
  const rentPeriods = ["Посуточно", "Месяц(ы)", "На длительный срок"];
  const houseTypes = ["Комната", "Квартира", "Дом"];
  const region = ["Первый район", "Второй район", "Третий район", "Четвёртый район", "Пятый район"];

  const randomRentPeriod = rentPeriods[Math.floor(Math.random() * rentPeriods.length)];
  const randomHouseType = houseTypes[Math.floor(Math.random() * houseTypes.length)];
  const randomRegion = region[Math.floor(Math.random() * region.length)];
  const randomPrice = Math.floor(Math.random() * 5000000) + 500;
  const randomRooms = Math.floor(Math.random() * 10) + 1;
  const randomDescription = faker.commerce.productDescription();
  const randomPhoto = faker.image.city(
    Math.floor(Math.random() * 1000) + 1,
    Math.floor(Math.random() * 1000) + 1,
  );
  const randomAddress = `Ленина ${Math.floor(Math.random() * 100) + 1}`;
  const randomGeoTag = `${Math.floor(Math.random() * 1000) + 1}, ${
    Math.floor(Math.random() * 1000) + 1
  }`;
  const randomIsRent = Math.random() < 0.5;

  return {
    rentPeriod: randomRentPeriod,
    typeHouse: randomHouseType,
    region: randomRegion,
    price: randomPrice,
    rooms: randomRooms,
    description: randomDescription,
    photo: randomPhoto,
    address: randomAddress,
    geoTag: randomGeoTag,
    isRent: randomIsRent,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

function generateRandomHouses(numHouses) {
  const houses = [];

  for (let i = 0; i < numHouses; i++) {
    houses.push(generateRandomHouseData());
  }

  return houses;
}

// console.log(generateRandomHouseData());
console.log(faker.image.city());

module.exports = generateRandomHouses;
