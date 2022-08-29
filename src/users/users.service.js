const users = require('./users.model');

const findByemailUserService = async (email) => users.findOne({ email: email });

const createUserService = async (body) => users.create(body);

const findAllUsersService = async () => users.find();

const findByIdUserService = (iduser) => users.findById(iduser);

module.exports = {
  findByemailUserService,
  createUserService,
  findAllUsersService,
  findByIdUserService,
};
