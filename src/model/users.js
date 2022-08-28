const mongooose = require('mongoose');

const UsersSchema = new mongooose.Schema({
  nome: { type: String, require: true },
  usuario: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  foto: { type: String, required: true },
});

const Users = mongooose.model('users', UsersSchema);

module.exports = Users;
