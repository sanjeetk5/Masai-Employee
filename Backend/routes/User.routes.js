const express = require("express");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/User.model");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  const { email, password , confirm_password } = req.body;

  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (hash) {
        const user = new UserModel({
          email,
          password: hash,
          confirm_password: hash,
        });
        await user.save();
        res.status(200).send({ msg: "Account Created" });
      } else {
        res.status(400).send({ err: "failed to create user" });
      }
    });
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign({ empID: user._id }, "emplo");
          res.status(200).send({ msg: "Login Successfull", token: token });
        } else {
          res.status(200).send({ msg: "Wrong Credentials" });
        }
      });
    }
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

module.exports = {
  userRouter,
};
