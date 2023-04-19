const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Contact = require('../views/Contact');
const Home = require('../views/HomePage');
const YandexMap = require('../views/MapComponent');
const { FeedBacks } = require('../../db/models');

console.log(FeedBacks, 'Feedback<<<<<<');

router.get('/', async (request, response) => {
  try {
    renderTemplate(Home, {}, response, request);
  } catch (error) {
    console.log('Ошибка запроса GET /', error);
  }
});
router.get('/map', async (req, res) => {
  try {
    renderTemplate(YandexMap, {}, res, req);
  } catch (error) {
    console.log('Ошибка запроса GET /', error);
  }
});

router.get('/contact', (req, res) => {
  renderTemplate(Contact, {}, res, req);
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
