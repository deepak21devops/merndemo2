const moongoose = require("mongoose");

const userModel = new moongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = moongoose.model("User", userModel);
