const express = require('express');
const bodyParser = require("body-parser");

const { Book } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/books', (req, res) => {
  Book.findAll().then(dados => {
    res.status(200).json(dados);
  }).catch(err => {
    console.log(err.message);
    res.status(500).json({ message: "Deu ruim!!!"});
  })
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));