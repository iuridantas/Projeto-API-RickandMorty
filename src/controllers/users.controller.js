const { default: mongoose } = require('mongoose');
const userssservice = require('../services/users.service');
const mongooose = require('mongoose');


const findAllUsersController = async (req, res) => {
  const allusers = await userssservice.findAllUsersService();
  if (allusers.length == 0) {
    return res.status(404).send({ message: 'Não existe nenhum usuário cadastrado na base de dados! ',});
  }

  res.send(allusers);
};

const createUsersController = async (req, res) => {
  const users = req.body;
  const newUsers = await userssservice.createUsersService(users);
  res.status(201).send(newUsers);
};

module.exports = {
  findAllUsersController,
  createUsersController,
};