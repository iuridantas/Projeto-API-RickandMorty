require('dotenv').config();
const user = require('../users/users.model');
const jwt = require('jsonwebtoken');

const loginService = (email) =>
  user.findOne({ email: email }).select('+password');

const generateToken = (userId) =>
  jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: 86400 });

module.exports = { loginService, generateToken };
