const mongooose = require('mongoose');

const rickandmortysSchema = new mongooose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const rickandmortys = mongooose.model('rickandmortys', rickandmortysSchema);

module.exports = rickandmortys;
