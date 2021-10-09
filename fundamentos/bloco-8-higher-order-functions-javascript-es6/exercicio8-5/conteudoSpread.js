// ex1: Espalhando um array e novos elementos: 
// const numbers = [1, 2, 3];

// const newArray = [...numbers, 4, 5, 6];
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(numbers); // [ 1, 2, 3 ]

// ex2: Espalhando vários arrays 
// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months); /* [
//   'JAN', 'FEV', 'MAR',
//   'ABR', 'MAI', 'JUN',
//   'JUL', 'AGO', 'SET',
//   'OUT', 'NOV', 'DEZ'
// ] */

// ex3: Uso do spread é no argumento de uma função que recebe vários parâmetros.
// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo)); // 20.76

// **************************************************************
// Vamos praticar:
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Manga', 'Melão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Jabuticaba', 'Amora', 'Kiwi'];

const fruitSalad = (fruit, additional) => {
  const saladaFrutas = [...fruit, ...additional];
  return saladaFrutas;
};

console.log(fruitSalad(specialFruit, additionalItens));