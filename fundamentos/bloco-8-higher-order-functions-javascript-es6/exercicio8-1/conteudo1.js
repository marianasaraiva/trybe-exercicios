// // Teste 01
// const sayHello = () => {
//   return ('hello trybers');
// }

// const printGreeting = (callback) => {
//     console.log(callback());
// }

// printGreeting(sayHello);

// // Teste 02: Retornar uma função de outra função:
// const sumFixAmount = (amount) => {
//   return (number) => amount + number;
// }

// const initialSum = sumFixAmount(15)
// console.log(initialSum(5));

// // Teste 03: 
// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);

// // Teste 03 - construindo funções mais especializadas e bem definidas. Veja este exemplo
// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// // Teste 04: refatorando para informar os numeros impares tambem:
// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(3, isEven); // Testa quais números serão pares;
// repeat(3, isOdd); // Testa quais números serão ímpares;

// // Teste 05:
// const numberGenerator = () => {
//   return Math.random() * 100;
// }

// console.log(numberGenerator());

// Exercicio do conteúdo:
// 1 - Crie uma função que retorne a string 'Acordando!!' ;
const wakeUp = () => "Acordando!!";
// console.log(wakeUp());
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
const breakfast = () => "Bora tomar café!!";
// console.log(breakfast());
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const sleep = () => "Partiu dormir!!";
// console.log(sleep());
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
const doingThings = (func) => func;

console.log(doingThings(wakeUp()));
console.log(doingThings(breakfast()));
console.log(doingThings(sleep()));
