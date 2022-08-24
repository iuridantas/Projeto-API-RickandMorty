const route = require('express').Router();
const controllerrickandmortys = require('../controllers/rickandmortys.controller');

route.get('/characters',controllerrickandmortys.findALLrickandmortyscontroller,);
route.get('/characters/find/:id',controllerrickandmortys.findByIdrickandmortycontroller,);
route.post('/characters/create',controllerrickandmortys.createrickandmortyscontroller,);
route.put('/characters/update/:id',controllerrickandmortys.updaterickandmortyscontroller,);
route.delete('/characters/delete/:id',controllerrickandmortys.deleterickandmortyscontroller,);
route.get('/characters/search',controllerrickandmortys.modelNamerickandmortycontroller,);
// route.get('/users/', controllerrickandmortys.findAllUsersController);
// route.post('/users/create', controllerrickandmortys.createUsersController,);

module.exports = route;
