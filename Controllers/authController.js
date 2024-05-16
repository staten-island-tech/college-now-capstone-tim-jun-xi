const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

const generateToken = async function (user) {
  const token = jwt.sign({ _id: user._id }, `${process.env.SECRET}`, {
    expiresIn: 60 * 60,
  });
  return token;
};

exports.register = async function (req, res) {
  try {
    if (!req.body.username || !req.body.password) {
      return res
        .status(400)
        .json({ success: false, msg: "Please pass username and password." });
    }
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      alert("Username is already taken. Please choose another one.");
      return res.status(400).json({
        success: false,
        msg: "Username is already taken. Please choose another one.",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    const token = await generateToken(newUser);
    await newUser.save();
    res.status(201).json({
      success: true,
      msg: "Successfully created new user.",
      newUser,
      token,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      msg: "Failed to register user.",
      error: err.message,
    });
  }
};
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }

    const token = await generateToken(user);

    const infoReceived = {
      _id: user._id,
      username: user.username,
      tokens: user.tokens,
    };
    res.json({ user: infoReceived, token });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};
exports.authCheck = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, `${process.env.SECRET}`);
    const user = await User.findOne({
      _id: decoded._id,
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};
exports.protected = async (req, res) => {
  let user = req.user;
  try {
    res.json({ user });
  } catch (error) {
    res.status(500).json(error);
  }
};
