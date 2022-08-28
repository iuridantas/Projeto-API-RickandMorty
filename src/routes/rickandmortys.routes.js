const route = require('express').Router();
const controllerrickandmortys = require('../controllers/rickandmortys.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs',swaggerUi.setup(swaggerDocument));
route.get('/characters',controllerrickandmortys.findALLrickandmortyscontroller,);
route.get('/characters/find/:id',controllerrickandmortys.findByIdrickandmortycontroller,);
route.post('/characters/create',controllerrickandmortys.createrickandmortyscontroller,);
route.put('/characters/update/:id',controllerrickandmortys.updaterickandmortyscontroller,);
route.delete('/characters/delete/:id',controllerrickandmortys.deleterickandmortyscontroller,);
route.get('/characters/search',controllerrickandmortys.findsearchrickandrickandmortycontroller,);

module.exports = route;
