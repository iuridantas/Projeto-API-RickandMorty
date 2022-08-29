const route = require('express').Router();
const controllerrickandmortys = require('./rickandmortys.controller');
const { validId, validobjectBody } = require('../middleware/rickandmortys.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs',swaggerUi.setup(swaggerDocument));
route.get('/characters',controllerrickandmortys.findALLrickandmortyscontroller,);
route.get('/characters/find/:id',validId,controllerrickandmortys.findByIdrickandmortycontroller,);
route.post('/characters/create',validobjectBody,controllerrickandmortys.createrickandmortyscontroller,);
route.put('/characters/update/:id',validId,validobjectBody,controllerrickandmortys.updaterickandmortyscontroller,);
route.delete('/characters/delete/:id',validId,controllerrickandmortys.deleterickandmortyscontroller,);
route.get('/characters/search',controllerrickandmortys.findsearchrickandrickandmortycontroller,);

module.exports = route;
