const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');

const UsersSchema = new mongooose.Schema({
  nome: { type: String, require: true },
  usuario: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true, lowercase: true },
  password: { type: String, require: true, select: false },
  foto: { type: String, required: true },
});

UsersSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const Users = mongooose.model('users', UsersSchema);

module.exports = Users;
