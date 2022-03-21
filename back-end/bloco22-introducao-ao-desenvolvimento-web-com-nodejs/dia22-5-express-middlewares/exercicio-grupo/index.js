// Atividade 1
// Crie uma rota POST /user/register que receba uma requisição que envie username , email e password no body da requisição, onde:
// username deve ter mais de 3 caracteres;
// email deve ter o formato email@mail.com;
// password deve conter no mínimo 4 caracteres e no máximo 8 (todos números);
// Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, 
// ex: status 400 e { "message": "invalid data" } ;
// Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, 
// ex: status 201 e { "message": "user created" } ;

// -------------------------
// Crie uma rota POST /user/login que receba uma requisição que envie email / password no body da 
// requisição e devolva um token como resposta, onde:
// O formato desse token retornado deve ser uma string aleatória com 12 caracteres;
// O email recebido deve ter o formato email@mail.com;
// O password deve conter no mínimo 4 caracteres e no máximo 8, todos números;
// Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, 
// ex: status 400 e { "message": "email or password is incorrect" }
// Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, 
// ex: status 200 e { "token": "86567349784e" } ;
// Dicas: separe suas rotas em arquivos e utilize middlewares para validar os campos recebidos nas requisições

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/user/register', (req, res, next) => {
  const { username, email, password } = req.body;
  if (username.length > 3, email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,}$/), password.length > 4 && password.length < 8) {
    return res.status(201).json({ "message": "user created" });    
  }
  return res.status(400).json({ "message": "invalid data" });
});

app.post('/user/login', (req, res) => {
  const { email, password } = req.body;
  const r = () => ((Math.random() + 1).toString(36).substring(0, 12));
  console.log(r);
  if (email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,}$/), password.length > 4 && password.length < 8) {
    return res.status(200).json({ "token": `${r()}` });    
  }
  return res.status(400).json({ "message": "email or password is incorrect" });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});