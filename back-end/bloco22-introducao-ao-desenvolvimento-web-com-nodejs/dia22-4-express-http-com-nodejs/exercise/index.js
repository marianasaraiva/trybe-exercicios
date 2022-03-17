const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


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

// 03. Crie uma rota POST /greetings
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
app.post('/greetings', (req, res, next) => {
  const { name, age } = req.body;
  if( parseInt(age, 10) > 17 ) res.status(200).json({ "message": `Hello, ${name}!` });
  return res.status(401).json({ "message": "Unauthorized" });
});


// Tratando o erro
app.use((err, req, res, next) => {
  res.status(500).send(`Messagem de erro: ${err.message}`);
});

// selecionando uma porta para ouvir a aplicação:
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});