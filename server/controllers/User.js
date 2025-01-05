const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  mobile: {
    type: Number,
    rquired: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    enum: ["student", "admin"],
    default: "student",
  },
});

const Users = mongoose.model("User", userSchema);
module.exports = Users;
