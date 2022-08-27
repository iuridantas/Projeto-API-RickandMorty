const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/rickandmortys.routes');
const routesUsers = require('./src/routes/users.routes');
const connecttodatabase = require('./src/database/database');

const port = 3000;
const app = express();

connecttodatabase();

app.use(express.json());
app.use(cors());
app.use('/rickandmortys', routes);
app.use('/users', routesUsers);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
