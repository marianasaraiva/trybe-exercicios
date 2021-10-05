const mercado = require('./mercado');

// complete a função maisBarata para retornar os dados da fruta mais barata;
function maisBarata() {
  let frutaMaisBarata = mercado.frutas[0];
  for (let index =0; index < mercado.frutas.length; index += 1) {
    if(mercado.frutas[index].preco < frutaMaisBarata.preco){
      frutaMaisBarata = mercado.frutas[index];
    }
  }
  return frutaMaisBarata;
}
console.log(maisBarata());

module.exports = maisBarata;
