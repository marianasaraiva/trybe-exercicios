const data = require('../data/zoo_data');

const { species } = data;
// species é um array de objetos, por isso podemos tratar com as HOFs, porém temos arrays dentro destes objetos para desafiar nossa manipulação.
// console.log(species);

// Parte 1: quando a função não recebe parametro
function countAnimals(animal) {
  if (animal === undefined) {
    // Utilizando a HOF reduce para reduzir o array para objeto no formato desejado.
    const objeto = species.reduce((previousValue, currentValue) => {
      previousValue[currentValue.name] = currentValue.residents.length;
      return previousValue;
    }, {});
    return objeto;
  }
}
console.log(countAnimals());

// // Parte II quando a função recebe o animal e formato de objeto como paraetro.
// function countAnimals({ specie: animal }) {
//   // Usei a HOF reduce para informar o numero de animais por nome e o length para dizer o tamanho do array.
//   const animaisQtd = species.reduce((sum, specie) => ((specie.name === animal) ? (specie.residents) : (sum)), 0);
//   console.log(animaisQtd);
//   return animaisQtd.length;
// }
// console.log(countAnimals({ specie: 'giraffes' }));
// console.log(countAnimals({ specie: 'penguins' }));

// // Parte III: quando a função recebe dois parametros
// function countAnimals({ specie: animal, sex: teste }) {
//   // usei o reduce para somar os animais por sexo:
//   const ani = species.reduce((sum, spec) => ((spec.name === animal) ? (spec.residents) : (sum)), 0);
//   const animals = ani.reduce((acc, sexo) => ((sexo.sex === teste) ? (acc + 1) : (acc)), 0);
//   return animals;
// }
// console.log(countAnimals({ specie: 'bears', sex: 'female' })); // 0
// console.log(countAnimals({ specie: 'elephants', sex: 'male' })); // 2

module.exports = countAnimals;

// 5. Implemente a função countAnimals
// Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

// Observações técnicas

// Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
// Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
// Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino.
// O que será avaliado

// Sem parâmetros, retorna as espécies e sua quantidade;
// Recebendo como parâmetro um objeto com a chave specie, retorna um número, a quantidade de animais daquela espécie;
// Recebendo como parâmetro um objeto com a chave specie e sex, retorna um número, a quantidade de animais daquela espécie, no sexo selecionado.
