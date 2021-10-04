const mercado = require('./mercado');

// complete a função "vitaminaC",
// para retornar um array com o nome de todas as frutas que contenham a vitamina C;
function vitaminaC() {
  const array = [];
  for (let index = 0; index < mercado.frutas.length; index += 1) {
  if (mercado.frutas[index].valorNutritivo.includes('C')) {
  array.push(mercado.frutas[index].nome)
  } 
  }
  return array;
  }
  vitaminaC(); 

module.exports = vitaminaC;
