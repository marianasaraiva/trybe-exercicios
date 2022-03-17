//5.  Crie uma API de dados das personagens de Simpsons
// Crie um arquivo chamado simpsons.json e popule com os seguintes dados:
// Utilize o modulo fs do Node para ler/escrever arquivos.
// criando funções para ajudar na resolução dos problemas propostos na questão 5

const fs = require('fs').promises;

function getSimpson(){
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
}

function setSimpson(addSimpson){
  return fs.whiteFile('./simpsons.json', JSON.stringify(addSimpson));
}

module.exports = { getSimpson, setSimpson };