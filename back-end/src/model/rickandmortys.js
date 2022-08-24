const mongooose = require('mongoose');

const rickandmortysSchema = new mongooose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const rickandmortys = mongooose.model('rickandmortys',rickandmortysSchema);

module.exports = rickandmortys;


// const UsersSchema = new mongooose.Schema({
//   nome: { type: String, require: true },
//   usuario: { type: String, require: true },
//   email: { type: String, require: true },
//   password: { type: String, require: true },
//   foto: { type: String, required: true },
// });

// const Users = mongooose.model('teacher-guides-users', UsersSchema);

// module.exports = Users;
