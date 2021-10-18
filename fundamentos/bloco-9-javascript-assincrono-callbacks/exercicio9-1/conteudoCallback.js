// const myExpenses = [
//   {
//     gym: 99,
//   },
//   {
//     ifood: 200,
//   },
//   {
//     phone: 60,
//   },
//   {
//     internet: 100,
//   },
// ];

// const myIncome = 1000;

// const monthlyBudget = (myIncome, myExpenses, callback) => {

//   const totalExpenses = callback(myExpenses);
//   const totalAfterExpenses = myIncome - totalExpenses;

//   console.log(`Balanço do mês:
//     Recebido: R$${myIncome},00
//     Gasto: R$${totalExpenses},00
//     Saldo: R$${totalAfterExpenses},00 `);
// };

// const handleExpenses = myExpenses => {
//   const eachValue = myExpenses.map((item) => Object.values(item)[0]);
//   const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
//   return totalExpense;
// };

// monthlyBudget(myIncome, myExpenses, handleExpenses);
// // Return:
// // Balanço do mês:
// //     Recebido: R$1000,00
// //     Gasto: R$459,00
// //     Saldo: R$541,00

// // Em síntese o que fizemos foi:
// // 1 - Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.
// // 2 - Implementamos a função monthlyBudget que recebe três parâmetros, nossos gastos, nossa renda e a função callback .
// // 3 - Realizamos a implementação da função callback representada por handleExpenses que recebe nossos gastos mensais e retorna um valor de gastos total.
// // 4 - Adicionamos handleExpenses na chamada da função monthlyBudget e como resultado temos o balanço mensal.

// // Para fixar
// // 1 - No código abaixo você tem a função getUser , que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.
// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = (callback) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   return callback(userToReturn);
// };

// console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
// console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

// 2 - No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a função getUser de forma que ela receba um callback para que possa realizar as operações abaixo sobre a pessoa.
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = callback => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(callback(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo