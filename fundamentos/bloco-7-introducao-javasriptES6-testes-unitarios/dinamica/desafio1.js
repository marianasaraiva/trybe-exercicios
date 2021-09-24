// // Desenvolva uma função que receba um array como parâmetro e
// // retorne um array com os números pares

let arr = [1,2,3,4,5]
let resultado = [];
function getEvenNumbers(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 2 === 0) {
      resultado.push(array[index]);
    }
  }
  return resultado;
}

console.log( getEvenNumbers(arr) ); // [2,4]