/* eslint-disable no-plusplus */

function generateRandomCategoryData() {
  const rentPeriods = ["Посуточно", "Месяц(ы)", "На длительный срок"];
  const houseTypes = ["Комната", "Квартира", "Дом"];
  const regions = [
    "Первый район",
    "Второй район",
    "Третий район",
    "Четвёртый район",
    "Пятый район",
  ];

  const randomRentPeriod = rentPeriods[Math.floor(Math.random() * rentPeriods.length)];
  const randomHouseType = houseTypes[Math.floor(Math.random() * houseTypes.length)];
  const randomRegion = regions[Math.floor(Math.random() * regions.length)];

  return {
    rentPeriod: randomRentPeriod,
    typeHouse: randomHouseType,
    region: randomRegion,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

function seedCategories(numCategories) {
  const categoryData = [];

  for (let i = 0; i < numCategories; i++) {
    categoryData.push(generateRandomCategoryData());
  }

  return categoryData;
}

// console.log(seedCategories(10));

module.exports = seedCategories;
