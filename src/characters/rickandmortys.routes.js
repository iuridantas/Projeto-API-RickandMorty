const route = require('express').Router();
const controllerrickandmortys = require('./rickandmortys.controller');
const {
  validId,
  validobjectBody,
} = require('../middleware/rickandmortys.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const authmiddleware = require('../auth/auth.middleware');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));
route.get(
  '/characters',
  authmiddleware,
  controllerrickandmortys.findALLrickandmortyscontroller,
);
route.get(
  '/characters/find/:id',
  authmiddleware,
  validId,
  controllerrickandmortys.findByIdrickandmortycontroller,
);
route.post(
  '/characters/create',
  authmiddleware,
  validobjectBody,
  controllerrickandmortys.createrickandmortyscontroller,
);
route.put(
  '/characters/update/:id',
  authmiddleware,
  validId,
  validobjectBody,
  controllerrickandmortys.updaterickandmortyscontroller,
);
route.delete(
  '/characters/delete/:id',
  authmiddleware,
  validId,
  controllerrickandmortys.deleterickandmortyscontroller,
);
route.get(
  '/characters/search',
  authmiddleware,
  controllerrickandmortys.findsearchrickandrickandmortycontroller,
);

module.exports = route;
