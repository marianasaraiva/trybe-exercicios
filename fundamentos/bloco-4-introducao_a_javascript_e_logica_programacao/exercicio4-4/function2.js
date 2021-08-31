// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .


function inteirosMaior(numeros){
  let maior = 0;
  // for para varrer o array
  for(let indice in numeros) {
    if(numeros[maior] < numeros[indice]){
      maior = indice;
    }
  }
  return maior;
}

console.log(inteirosMaior([2, 3, 6, 7, 10, 1]));



/*
const array = [2, 3, 6, 7, 10, 1];
array.sort(function (a,b){
  return a-b
})
console.log(array)

Colocando em ordem crescente
*/