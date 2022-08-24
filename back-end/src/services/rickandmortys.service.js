

const Rickandmortys = require('../model/rickandmortys')
const users = require('../model/rickandmortys')

const findALLrickandmortysservice = async () => {
  const rickandmortys = await Rickandmortys.find();
  return rickandmortys;
};

const findByIdrickandmortyservice = async (idParam) => {
  const rickandmortys = await Rickandmortys.findById(idParam)
  return rickandmortys;
};

const modelNamerickandmortyservice = async (name) => {
  const rickandmortys = await Rickandmortys.modelName(name)
  return rickandmortys;
};

const createrickandmortysservice = async (newrickandmortys) => {
  const rickandmortyscreated = await Rickandmortys.create(newrickandmortys)
  return rickandmortyscreated;
};

const updaterickandmortysservice = async (idParam, rickandmortysEdit) => {
  const rickandmortysupdate = await Rickandmortys.findByIdAndUpdate(idParam, rickandmortysEdit)
  return rickandmortysupdate;
};

const deleterickandmortysservice = async (idParam) => {
  return await Rickandmortys.findByIdAndDelete(idParam)
};

// const findAllUsersService = async () => {
//   const allusers = await users.find();
//   return allusers;
// };

// const createUsersService = async (newUsers) => {
//   const createdusers = await users.create(newUsers);
//   return createdusers;
// };

module.exports = {
  findALLrickandmortysservice,
  findByIdrickandmortyservice,
  createrickandmortysservice,
  updaterickandmortysservice,
  deleterickandmortysservice,
  modelNamerickandmortyservice,
  // findAllUsersService,
  // createUsersService,
};
