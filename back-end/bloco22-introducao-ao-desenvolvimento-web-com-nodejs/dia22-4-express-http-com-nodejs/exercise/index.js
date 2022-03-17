const express = require('express');

const app = express();
app.use(express.json());


// 01. Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/ping', (req, res, next) => {
  res.status(200).send( { message: 'pong' });
});

// 02. Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
app.post('/hello', (req, res, next) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` })
});



app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});