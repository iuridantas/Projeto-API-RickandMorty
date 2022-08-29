const Rickandmortys = require('./rickandmortys.model')

const findALLrickandmortysservice = async () => {
  const rickandmortys = await Rickandmortys.find();
  return rickandmortys;
};

const findByIdrickandmortyservice = async (idParam) => {
  const rickandmortys = await Rickandmortys.findById(idParam)
  return rickandmortys;
};

const findsearchrickandmortyservice = async (name) => {
  const rickandmortys = await Rickandmortys.findOne({name: name})
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


module.exports = {
  findALLrickandmortysservice,
  findByIdrickandmortyservice,
  createrickandmortysservice,
  updaterickandmortysservice,
  deleterickandmortysservice,
  findsearchrickandmortyservice,
};
