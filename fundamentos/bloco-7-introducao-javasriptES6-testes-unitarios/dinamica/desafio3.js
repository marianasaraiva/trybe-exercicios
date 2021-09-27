// Desenvolva uma função que receba um array de números e retorne verdadeiro se TODOS os valores forem maior que o número recebido por parâmetro, falso caso contrário

// Ex: 
// array: [20, 30, 19, 1, 50]
// number: 20
// resultado esperado: false 

// Ex: 
// array: [20, 30, 19, 21]
// number: 18
// resultado esperado: true

// function allGreaterThan(number, array) {
  
// }

// Desenvolva uma função que receba um array de números e retorne verdadeiro se TODOS os valores forem maior que o número recebido por parâmetro, falso caso contrário

function allGreaterThan(number, array) {
  let maiores = [];
  for (let i  = 0; i < array.length; i += 1){
    if (array[i] > number) {
      maiores.push(array[i]);
    }
  }
  if (maiores.length === array.length) {
    return true;
  } else {
    return false;
  }
}
console.log(allGreaterThan(18, [20, 30, 19, 21]));
