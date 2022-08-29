require("dotenv").config();
const express = require('express');
const cors = require('cors');
const routes = require('./characters/rickandmortys.routes');
const routesUsers = require('./users/users.routes');
const authroute = require('./auth/auth.routes');
const connecttodatabase = require('./database/database');

const port = process.env.PORT || 3000;
const app = express();

connecttodatabase();

app.use(express.json());
app.use(cors());
app.use('/', routes);
app.use('/users', routesUsers);
app.use('/auth', authroute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
