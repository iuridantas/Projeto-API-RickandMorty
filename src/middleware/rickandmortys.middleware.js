const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validobjectBody = (req, res, next) => {
  const rickandmortys = req.body;
  if (!rickandmortys || !rickandmortys.name || !rickandmortys.imageUrl) {
    return res.status(400).send({ message: 'Envie os dados completo!' });
  }
  next();
};

module.exports = {
  validId,
  validobjectBody,
};
