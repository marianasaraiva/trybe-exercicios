const mercado = require("./mercado");

// complete a função diaDesconto, que ao receber o dia da semana ("seg", "ter", etc..),
// retorna uma lista com o nome das frutas que estão com desconto neste dia;
function diaDescontos(dia) {
  let listaFrutasComDesconto = [];
  let idsGuardados = mercado.descontoSemana[dia];
  //retorno com o nome das frutas
  for (let index = 0; index < mercado.frutas.length; index += 1) {
   if (idsGuardados.includes(mercado.frutas[index].id)){
     listaFrutasComDesconto.push(mercado.frutas[index].nome);
   }
  }
  return listaFrutasComDesconto;
}

console.log(diaDescontos('ter'));
module.exports = diaDescontos;
