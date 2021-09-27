// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const ordem = oddsAndEvens.sort(function (a, b) {
//   return a-b;
// });

// console.log(ordem);



// refatorando a função acima
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordem = oddsAndEvens.sort((a, b) => a - b);

console.log(ordem);