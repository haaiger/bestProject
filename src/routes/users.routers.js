const router = require("express").Router();
const bcrypt = require("bcrypt");
const renderTemplate = require("../lib/renderTemplate");

const { User } = require("../../db/models");
const FullRegForm = require("../views/FullRegForm");

router.post("/registration", async (req, res) => {
  try {
    const { firstName, email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ msg: "Почта уже зарегистрирована" });
    } else {
      const hashPass = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        firstName,
        email,
        password: hashPass,
      });
      req.session.firstName = newUser.firstName;
      req.session.userId = newUser.id;
      req.session.isAdmin = newUser.isAdmin;
      res.json(newUser);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("newCookie");
    res.sendStatus(200);
  });
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      if (passCheck) {
        req.session.firstName = user.firstName;
        req.session.userId = user.id;
        req.session.isAdmin = user.isAdmin;

        res.json({
          msg: "login ok",
          firstName: user.firstName,
          user,
          UserIdmsg: user.id,
          isAdmin: user.isAdmin,
        });
      } else {
        res.json({ msg: "Не верный пароль" });
      }
    } else {
      res.json({ msg: "Почта не найдена" });
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get("/full-reg-form", async (request, response) => {
  renderTemplate(FullRegForm, {}, request, response);
});

module.exports = router;
