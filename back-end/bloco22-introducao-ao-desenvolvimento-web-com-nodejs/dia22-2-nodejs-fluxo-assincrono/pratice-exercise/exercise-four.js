const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((simpsons)=> {
    return simpsons.map(({ id, name }) => `${id} - ${name}`)
  })
  .then((strings) => {
    return strings.forEach((string) => console.log(string))
  });
  // .catch((err) => {
  //   console.error(`Erro ao escrever o arquivo: ${err.message}`);
  // });