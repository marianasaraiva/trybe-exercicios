const mercado = require('./mercado');

// complete a função "nomeFrutas", para retornar um array com o nome de todas as frutas da constante mercado;
function nomeFrutas() {
  let array = [];
  for (let index = 0; index < mercado.frutas.length; index += 1){
    array.push(mercado.frutas[index].nome);
  }
  return array
}
console.log(nomeFrutas());

module.exports = nomeFrutas;
