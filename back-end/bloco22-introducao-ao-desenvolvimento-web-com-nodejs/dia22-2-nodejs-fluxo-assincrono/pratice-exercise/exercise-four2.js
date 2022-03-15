const fs = require('fs').promises;

async function personagemById(id) {
  const personagem = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      return JSON.parse(fileContent);
    })
 
    console.log(personagem);
    const findPersonagem = personagem.find((simpson) => simpson.id === id)
    console.log(findPersonagem);

    if(!findPersonagem) throw new Error('Id não encontrado');
    
    return console.log(findPersonagem.name);
}

personagemById('5');

