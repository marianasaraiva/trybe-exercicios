const mercado = require("./mercado");

// complete a função buscaPorPredominante, que ao receber o mes como valor,
// retorna uma lista com todos os nomes das frutas que esse mês aparece no campo predominante
function buscaPorMesPredominante(mes) {
  let meses = [];
  for (let index = 0; index < mercado.frutas.length; index += 1) {
    if (mercado.frutas[index].predominante.includes(mes)) {
      meses.push(mercado.frutas[index].nome);
    }
  }  
  return meses;
}
console.log(buscaPorMesPredominante('JAN'));

module.exports = buscaPorMesPredominante;
