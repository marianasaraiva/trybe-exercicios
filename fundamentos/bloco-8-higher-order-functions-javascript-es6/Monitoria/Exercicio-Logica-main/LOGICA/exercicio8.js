const mercado = require('./mercado');

// complete a função buscaValorNutritivo, que ao receber um valor nutritivo como parametro,
// retorna um array com o nome de todas as frutas que possui esse valor nutritivo
function buscaValorNutritivo(vitamina) {
  const frutas = [];
  for (let index = 0; index < mercado.frutas.length; index += 1) {
  if (mercado.frutas[index].valorNutritivo.includes(vitamina)) {
  frutas.push(mercado.frutas[index].nome);
  }
  }
  return frutas;
  }
  
  console.log(buscaValorNutritivo('C')); 

module.exports = buscaValorNutritivo;
