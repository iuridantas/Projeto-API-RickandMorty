const mongoose = require('mongoose');

const connecttodatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb Atlas Conectado!'))
    .catch((error) => console.log(`Não conectado, erro: ${error}`));
};

module.exports = connecttodatabase;
