const { default: mongoose } = require('mongoose');
const userssservice = require('./users.service');
const authService = require('../auth/auth.service');
const mongooose = require('mongoose');

const findAllUsersController = async (req, res) => {
  const users = await userssservice.findAllUsersService();

  if (users.length === 0) {
    return res
      .status(400)
      .send({ message: 'Não existem usuários cadastrados!' });
  }

  res.send(users);
};

const createUsersController = async (req, res) => {
  const { name, username, email, password, photo } = req.body;

  if (!name || !username || !email || !password || !photo) {
    return res
      .status(400)
      .send({
        message:
          "Alguns campos estão faltando. Os campos são: 'name', 'username', 'email', 'password', 'photo' .",
      });
  }

  const foundUser = await userssservice.findByemailUserService(email);

  if (foundUser) {
    return res.status(400).send({ message: 'Usuário já existe!' });
  }

  const user = await userssservice
    .createUserService(req.body)
    .catch((err) => console.log(err.message));

  if (!user) {
    return res.status(400).send({ message: 'Erro ao criar usuário!' });
  }

  const token = authService.generateToken(user.id);

  res.status(201).send({
    user: {
      id: user.id,
      name,
      username,
      email,
      password,
      photo,
    },
    token,
  });
};

module.exports = {
  findAllUsersController,
  createUsersController,
};
