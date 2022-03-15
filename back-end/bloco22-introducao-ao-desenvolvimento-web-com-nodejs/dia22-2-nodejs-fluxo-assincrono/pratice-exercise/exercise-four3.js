const fs = require('fs').promises;

async function personagemById() {
  const personagem = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      return JSON.parse(fileContent);
    })
    
    const arrayPersonagem = personagem.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    await fs.writeFile('./simpsons.json', JSON.stringify(arrayPersonagem));
}

personagemById();