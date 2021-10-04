const mercado = require('./mercado');

// complete a função frutaPredominante
// para retornar o nome da fruta que possui o maior número de meses predominantes; 
function frutaPredominante() {
  let arrayTamanho = mercado.frutas[0];
  for (let index = 0; index < mercado.frutas.length; index += 1) {
  if (mercado.frutas[index].predominante.length > arrayTamanho.predominante.length) {
  arrayTamanho = mercado.frutas[index];
  }
  }
  return arrayTamanho.nome;
  }
  console.log(frutaPredominante()); 

module.exports = frutaPredominante;
