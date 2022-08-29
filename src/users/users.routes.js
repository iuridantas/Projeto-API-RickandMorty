const route = require('express').Router();
const controllerusers = require('./users.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const authmiddleware = require('../auth/auth.middleware');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));
route.get('/', authmiddleware, controllerusers.findAllUsersController);
route.post('/create', controllerusers.createUsersController);

module.exports = route;
