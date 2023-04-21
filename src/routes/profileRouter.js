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

const getFilters = require("../helpers/getFilters"); // * функция, формирующая массивы поисковых фильтров для рендеринга форм создания, поиска и редактирования объявлений

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

    const filters = await getFilters();

    renderTemplate(Profile, { user, favsFull, filters }, req, res);
  } catch (error) {
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
    isRent: false,
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

//* поиск объявления администратором
router.post("/search", async (req, res) => {
  // console.log("=============", req.body, "================");
  const obj = req.body;

  for (const key in obj) {
    if (obj[key] === null || obj[key] === "") {
      delete obj[key];
    }
  }
  // console.log("=============", obj, "================");
  const searchResult = await House.findAll({ where: { ...obj }, raw: true });
  // console.log(searchResult, "VVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  if (searchResult[0]) {
    res.json(searchResult);
  } else {
    res.json({ msg: "Ничего не нашлось" });
  }
});

//* слушатель кнопки "показать все" объявления
router.post("/searchAll", async (req, res) => {
  const allAds = await House.findAll();
  if (allAds) {
    res.json(allAds);
  } else {
    res.json({ msg: "Не удалось выполнить поиск" });
  }
});

//* редактирование данных пользователя (кроме пароля)
router.put("/user", async (req, res) => {
  console.log("===========PUT EDIT USER================");
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
  console.log("===========PUT EDIT PASSWORD================");
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

//* удаление объявления админом
router.delete("/:adId", async (req, res) => {
  const { adId } = req.params;

  const favsToDelete = await Favorite.findAll({
    where: { houseId: adId },
    raw: true,
  });
  favsToDelete.map(async (fav) => {
    await Favorite.destroy({ where: { id: fav.id } });
  });

  const deletedAd = await House.destroy({ where: { id: adId } });
  // console.log(deletedAd, "^^^^^^^^^^^");
  if (deletedAd) {
    res.json({ msg: `Объявление c id ${adId} удалено` });
  } else {
    res.json({ msg: "Не удалось удалить" });
  }
});

//* редактирование объявления админом
router.put("/:adId", async (req, res) => {
  const { adId } = req.params;
  // console.log(req.body, "=========");
  let {
    typeHouse,
    rentPeriod,
    region,
    address,
    price,
    description,
    geoTag,
    isRent,
  } = req.body;
  if (isRent === "false") {
    isRent = false;
  } else {
    isRent = true;
  }

  const updatedAd = await House.update(
    {
      typeHouse,
      rentPeriod,
      region,
      address,
      price,
      description,
      geoTag,
      isRent,
    },
    { where: { id: adId }, returning: true, plain: true }
  );

  // console.log(updatedAd, "^^^^");

  if (updatedAd[1]) {
    // console.log(updatedAd[1].dataValues, "^^^^");
    res.json({ msg: "success", ...updatedAd[1].dataValues });
  } else {
    res.json({ msg: "Не удалось изменить" });
  }
});

module.exports = router;
