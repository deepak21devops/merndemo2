const router = require("express").Router();
const User = require("../models/AuthModel");
const bcrypt = require("bcrypt");

// New Registration Router
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password, salt);
    const user = await new User({
      username: req.body.username,
      password: hashpassword,
      email: req.body.email,
    });
    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const getUser = await User.find();
    // const user = await getUser.save();
    console.log(getUser);
    res.status(200).json(getUser);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
