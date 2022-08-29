const route = require('express').Router();
const authcontroller = require('./auth.controller');

route.post('/login', authcontroller.logincontroller);

module.exports = route;
