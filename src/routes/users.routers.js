const router = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../../db/models");

router.post("/registration", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ msg: "Почта уже зарегистрирована" });
    } else {
      const hashPass = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name,
        email,
        password: hashPass,
      });
      req.session.user = newUser.name;
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
        req.session.user = user.name;
        req.session.userId = user.id;
        req.session.isAdmin = user.isAdmin;

        res.json({
          msg: "login ok",
          userName: user.name,
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

module.exports = router;
