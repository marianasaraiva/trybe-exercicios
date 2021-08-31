// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function menorValor(numero){
  let menor = 0;
  for(let indice in numero){
    if(numero[menor] > numero[indice]){
      menor = indice
    }
  }
  return menor;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));