const mercado = require('./mercado');

// complete a função maisCara para retornar os dados da fruta com o maior preço;
function maisCara() {
  let frutaMaisCara = mercado.frutas[0];
  for (let index = 0; index < mercado.frutas.length; index += 1) {
    // console.log(mercado.frutas[index].preco);
    if (mercado.frutas[index].preco > frutaMaisCara.preco){
      frutaMaisCara = mercado.frutas[index];
    } 
  }
  return frutaMaisCara
}

console.log(maisCara());

module.exports = maisCara;
