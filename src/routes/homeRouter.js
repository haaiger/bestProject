const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Contact = require('../views/Contact');
const Home = require('../views/HomePage');
const YandexMap = require('../views/MapComponent');
const { FeedBacks } = require('../../db/models');

console.log(FeedBacks, 'Feedback<<<<<<');

router.get('/', async (request, response) => {
  try {
    // const count = await Houses.count();

    // // Получаем уникальные значения.
    // const offsets = new Set();
    // while (offsets.size < 3) {
    //   const randomOffset = Math.floor(Math.random() * count);
    //   offsets.add(randomOffset);
    // }

    // // Поиск дома.
    // const findThreeRandomAds = await Promise.all(
    //   Array.from(offsets).map((offset) => Houses.findOne({
    //     offset,
    //     limit: 1,
    //   })),
    // );

    renderTemplate(Home, {}, request, response);
  } catch (error) {
    console.log('Ошибка запроса GET /', error);
  }
});
// router.get('/map', async (req, res) => {
//   try {
//     renderTemplate(YandexMap, {}, res, req);
//   } catch (error) {
//     console.log('Ошибка запроса GET /', error);
//   }
// });

router.get('/contact', (req, res) => {
  renderTemplate(Contact, {}, req, res);
});
module.exports = router;

router.post('/feedBack', async (req, res) => {
  try {
    console.log(req.body, '<<<<<<REQ BODY');
    const { name, number, email, question } = req.body;

    const newQuestion = await FeedBacks.create({
      name,
      number,
      email,
      question,
    });

    res.json(newQuestion);
  } catch (err) {
    console.log(err, 'ошибка в руте feedBack');
  }
});
