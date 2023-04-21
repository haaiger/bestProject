/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
const router = require("express").Router();
const multer = require("multer");
const renderTemplate = require("../lib/renderTemplate");
const Profile = require("../views/Profile");
const Favorites = require("../views/components/Favorites");
const { User, Favorite, Category, House } = require("../../db/models");

const upload = multer({ dest: "public/photo/" });
let user;

const bcrypt = require("bcrypt");

//* отрисовка личного кабинета пользователя
router.get("/", async (req, res) => {
  try {
    user = await User.findOne({
      where: { id: req.session.userId },
      raw: true,
    });
    const userFavs = await Favorite.findAll({
      where: { userId: req.session.userId },
      raw: true,
    });

    const favsFull = [];
    for (let i = 0; i < userFavs.length; i++) {
      favsFull.push(
        await House.findOne({
          where: { id: userFavs[i].houseId },
          raw: true,
        })
      );
    }
    // console.log("USER>>>>>>", user);
    // console.log("userFavs>>>>>>", favsFull);

    const categories = await Category.findAll();
    const rentPeriods = categories
      .map((item) => item.rentPeriod)
      .filter((item) => item);
    const typesOfHouses = categories
      .map((item) => item.typeHouse)
      .filter((item) => item);
    const regions = categories
      .map((item) => item.region)
      .filter((item) => item);

    const filters = { rentPeriods, typesOfHouses, regions };

    renderTemplate(Profile, { user, favsFull, filters }, req, res);
  } catch (error) {
    console.log("Ошибка запроса GET /", error);
    console.log("Ошибка запроса GET /", error);
  }
});

//* добавление нового объявления администратором
router.post("/add", upload.array("photo"), async (req, res) => {
  const {
    rentPeriod,
    typeHouse,
    region,
    price,
    description,
    address,
    geoTag,
    isRent,
    createdAt,
    updatedAt,
  } = req.body;

  const photos = req.files.map((file) => file.path);
  console.log(photos, "req.filesreq.filesreq.files");

  const newAdvert = await House.create({
    rentPeriod,
    typeHouse,
    region,
    price,
    description,
    photo: JSON.stringify(photos),
    address,
    geoTag,
    isRent,
    createdAt,
    updatedAt,
  });

  if (newAdvert) {
    res.json({ msg: "SUCCESS" });
  } else {
    res.json({ msg: "FAIL" });
  }
});

router.post("/search", async (req, res) => {
  // console.log("=============", req.body, "================");
  const obj = req.body;

  for (const key in obj) {
    if (obj[key] === null || obj[key] === "") {
      delete obj[key];
    }
  }
  console.log("=============", obj, "================");
  const searchResult = await House.findAll({ where: { ...obj }, raw: true });
  console.log(searchResult, "VVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  if (searchResult[0]) {
    res.json(searchResult);
  } else {
    res.json({ msg: "Ничего не нашлось" });
  }
});

//* редактирование данных пользователя (кроме пароля)
router.put("/user", async (req, res) => {
  const { firstName, middleName, lastName, phone, email } = req.body;
  const updatedUser = await User.update(
    {
      firstName,
      middleName,
      lastName,
      phone,
      email,
    },
    { where: { id: req.session.userId }, returning: true, plain: true }
  );
  // console.log(updatedUser[1].dataValues);
  if (updatedUser[1]) {
    res.json({
      msg: "success",
      firstName: updatedUser[1].dataValues.firstName,
      middleName: updatedUser[1].dataValues.middleName,
      lastName: updatedUser[1].dataValues.lastName,
      phone: updatedUser[1].dataValues.phone,
      email: updatedUser[1].dataValues.email,
    });
  } else {
    res.json({ msg: "fail" });
  }
});

//* проверка старого пароля перед сменой нового
router.post("/password", async (req, res) => {
  const { oldPass } = req.body;
  const passCheck = await bcrypt.compare(oldPass, user.password);
  if (passCheck) {
    res.json({ msg: "Введите новый пароль" });
  } else {
    res.json({ msg: "Пароль неверный" });
  }
});

//* смена старого пароля на новый после первичной проверки
router.put("/password", async (req, res) => {
  const { newPass } = req.body;
  const hashPass = await bcrypt.hash(newPass, 10);
  const updatedUser = await User.update(
    { password: hashPass },
    { where: { id: req.session.userId }, returning: true, plain: true }
  );

  // console.log(updatedUser);
  if (updatedUser) {
    res.json({ msg: "Пароль изменён" });
  } else {
    res.json({ msg: "Не удалось изменить пароль" });
  }
});

router.get("/favorites", async (request, response) => {
  const { userId } = request.session;
  const findFavorite = await Favorite.findAll({ where: { userId }, raw: true });
  const numbersAd = findFavorite.map((house) => house.houseId);
  const houses = await House.findAll({ raw: true, where: { id: numbersAd } });
  renderTemplate(Favorites, { houses, numbersAd }, request, response);
});

module.exports = router;
