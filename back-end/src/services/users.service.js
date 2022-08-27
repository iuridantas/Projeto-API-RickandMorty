const users = require('../model/users')


const findAllUsersService = async () => {
  const allusers = await users.find();
  return allusers;
};

const createUsersService = async (newUsers) => {
  const createdusers = await users.create(newUsers);
  return createdusers;
};

module.exports = {
  findAllUsersService,
  createUsersService,
};