/* eslint-disable no-plusplus */

function generateRandomUserData() {
  const firstNames = ["Артём", "Антон", "Вячеслав", "Денис", "София"];
  const middleNames = ["Михайлович", "Игоревич", "Анатолич"];
  const lastNames = ["Первый(-ая)", "Второй(-ая)", "Пятый(-ая)"];
  const emails = [
    "test@example.com",
    "test1@example.com",
    "test2@example.com",
    "test3@example.com",
    "test4@example.com",
  ];
  const phones = [
    "+1 555-555-5555",
    "+44 555 555555",
    "+61 2 5555 5555",
    "+86 10 5555 5555",
    "+81 3-5555-5555",
  ];
  const passwords = [
    "123",
    "321",
    "password",
  ];
  const isAdmins = [false, false, false, false, true];

  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomMiddleName = middleNames[Math.floor(Math.random() * middleNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const randomEmail = emails[Math.floor(Math.random() * emails.length)];
  const randomPhone = phones[Math.floor(Math.random() * phones.length)];
  const randomPassword = passwords[Math.floor(Math.random() * passwords.length)];
  const randomIsAdmin = isAdmins[Math.floor(Math.random() * isAdmins.length)];

  return {
    firstName: randomFirstName,
    middleName: randomMiddleName,
    lastName: randomLastName,
    email: randomEmail,
    phone: randomPhone,
    password: randomPassword,
    isAdmin: randomIsAdmin,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

function seedUsers(numUsers) {
  const userData = [];

  for (let i = 0; i < numUsers; i++) {
    userData.push(generateRandomUserData());
  }

  return userData;
}

// console.log(seedUsers(10));

module.exports = seedUsers;
