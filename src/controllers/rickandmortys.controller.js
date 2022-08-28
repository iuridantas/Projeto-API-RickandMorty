const { default: mongoose } = require('mongoose');
const rickandmortysservice = require('../services/rickandmortys.service');
const mongooose = require('mongoose');

const findALLrickandmortyscontroller = async (req, res) => {
  const rickandmortys = await rickandmortysservice.findALLrickandmortysservice();

  if (rickandmortys.length === 0) {
    return res.status(404).send({ message: 'Não possui personagem cadastrado!' });
  }

  res.send(rickandmortys);
};

const findByIdrickandmortycontroller = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const chosenrickandmortys = await rickandmortysservice.findByIdrickandmortyservice(idParam);

  if (!chosenrickandmortys) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }

  res.send(chosenrickandmortys);
};

const findsearchrickandrickandmortycontroller = async (req, res) => {
  const name = req.query.name;

  const characterickandmortys = await rickandmortysservice.findsearchrickandrickandmortyservice(name);

  if (!characterickandmortys) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }

  res.send(characterickandmortys);
};

const createrickandmortyscontroller = async (req, res) => {
  const rickandmortys = req.body;

  if (
    !rickandmortys ||
    !rickandmortys.name ||
    !rickandmortys.image 
  ) {
    return res.status(400).send({ message: 'Envie os dados completo!' });
  }
  const newrickandmortys = await rickandmortysservice.createrickandmortysservice(rickandmortys);
  res.status(201).send(newrickandmortys);
};

const updaterickandmortyscontroller = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const rickandmortysEdit = req.body;

  if (
    !rickandmortysEdit ||
    !rickandmortysEdit.name ||
    !rickandmortysEdit.image 
  )  {
    return res.status(400).send({ message: 'Envie os dados completo!' });
  }

  const updatedrickandmortys = await rickandmortysservice.updaterickandmortysservice(idParam, rickandmortysEdit);
  res.send(updatedrickandmortys);
};

const deleterickandmortyscontroller = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  await rickandmortysservice.deleterickandmortysservice(idParam);

  res.send({ message: 'Personagem deletado com sucesso!' });
};


module.exports = {
  findALLrickandmortyscontroller,
  findByIdrickandmortycontroller,
  createrickandmortyscontroller,
  updaterickandmortyscontroller,
  deleterickandmortyscontroller,
  findsearchrickandrickandmortycontroller,
};
