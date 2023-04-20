/* eslint-disable no-plusplus */

function generateRandomHouseData() {
  const rentPeriods = ["Посуточно", "Месяц(ы)", "На длительный срок"];
  const houseTypes = ["Комната", "Квартира", "Дом"];
  const districts = ["Первый район", "Второй район", "Третий район", "Четвёртый район", "Пятый район"];

  const randomRentPeriod = rentPeriods[Math.floor(Math.random() * rentPeriods.length)];
  const randomHouseType = houseTypes[Math.floor(Math.random() * houseTypes.length)];
  const randomDistrict = districts[Math.floor(Math.random() * districts.length)];
  const randomPrice = Math.floor(Math.random() * 5000000) + 500;
  const randomRooms = Math.floor(Math.random() * 10) + 1;
  const randomDescription = `Это ${randomHouseType} с ${randomRooms} комнат(ой/ами), расположена в(-о) ${randomDistrict}.`;
  const randomPhoto = `https://example.com/${randomHouseType}.jpg`;
  const randomAddress = `Ленина ${Math.floor(Math.random() * 100) + 1}`;
  const randomGeoTag = `${Math.floor(Math.random() * 1000) + 1}, ${
    Math.floor(Math.random() * 1000) + 1
  }`;
  const randomIsRent = Math.random() < 0.5;

  return {
    rentPeriod: randomRentPeriod,
    typeHouse: randomHouseType,
    district: randomDistrict,
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

module.exports = generateRandomHouses;
