const mercado = require('./mercado');

// complete a função buscaPorNome, que ao receber o nome da fruta, retorna um objeto com os dados da fruta
function buscaPorNome(nome) {
  let fruta = "";
  //console.log(nome)
  for (let index = 0; index < mercado.frutas.length; index += 1) {
  if (mercado.frutas[index].nome === nome) {
  fruta = mercado.frutas[index];
  break
  }
  }
  return fruta;
  }
  
  console.log(buscaPorNome('Maracujá')); 

module.exports = buscaPorNome;
