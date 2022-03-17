const express = require('express');
const bodyParser = require('body-parser');
const { getSimpson, setSimpson } = require('./functions-extras');

const app = express();
app.use(bodyParser.json());
const rescue = require('express-rescue');


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

// 04. Crie uma rota PUT /users/:name/:age .
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .
app.put('/users/:name/:age', (req, res, next) => {
 const { name } = req.params;
 const { age } = req.params;

 res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
});

//5.  Crie uma API de dados das personagens de Simpsons
// Utilize o modulo fs do Node para ler/escrever arquivos.
// Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK .
// Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman , Insomnia ou httpie .

// 06. Crie um endpoint GET /simpsons
// O endpoint deve retornar um array com todos os simpsons.
app.get('/simpsons', rescue(async(req, res, next) => {
  const result = await getSimpson();
  res.status(200).json(result);
}));

// 07. Crie um endpoint GET /simpsons/:id
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .
app.get('/simpsons/:id', async (req, res, next) => {
  const { id } = req.params;
  const resultGet = await getSimpson();
  const findSimpson = resultGet.find((simpson)=> simpson.id === id);
  if(!findSimpson) return res.status(404).json({ message: 'simpson not found' });
  res.status(200).json(findSimpson);
})

// Tratando o erro
app.use((err, req, res, next) => {
  res.status(500).send(`Messagem de erro: ${err.message}`);
});

// selecionando uma porta para ouvir a aplicação:
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});