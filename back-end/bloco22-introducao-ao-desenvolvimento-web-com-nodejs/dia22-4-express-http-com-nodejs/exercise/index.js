const express = require('express');

const app = express();
app.use(express.json());

app.get('/ping', (req, res, next) => {
  res.status(200).send( { message: 'pong' });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
})