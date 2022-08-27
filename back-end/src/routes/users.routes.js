const route = require('express').Router();
const controllerusers = require('../controllers/users.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs',swaggerUi.setup(swaggerDocument));
route.get('/users/', controllerusers.findAllUsersController);
route.post('/users/create', controllerusers.createUsersController,);

module.exports = route;