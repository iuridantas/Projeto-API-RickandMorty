const { default: mongoose } = require('mongoose');
const rickandmortysservice = require('./rickandmortys.service');
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

  const chosenrickandmortys = await rickandmortysservice.findByIdrickandmortyservice(idParam);

  if (!chosenrickandmortys) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }

  res.send(chosenrickandmortys);
};

const findsearchrickandrickandmortycontroller = async (req, res) => {
  const name = req.query.name;

  const characterickandmortys = await rickandmortysservice.findsearchrickandmortyservice(name);

  if (!characterickandmortys) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }

  res.send(characterickandmortys);
};

const createrickandmortyscontroller = async (req, res) => {
  const rickandmortys = req.body;

  const newrickandmortys = await rickandmortysservice.createrickandmortysservice(rickandmortys);
  res.status(201).send(newrickandmortys);
};

const updaterickandmortyscontroller = async (req, res) => {
  const idParam = req.params.id;

  const rickandmortysEdit = req.body;

  const updatedrickandmortys = await rickandmortysservice.updaterickandmortysservice(idParam, rickandmortysEdit);
  res.send(updatedrickandmortys);
};

const deleterickandmortyscontroller = async (req, res) => {
  const idParam = req.params.id;

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
