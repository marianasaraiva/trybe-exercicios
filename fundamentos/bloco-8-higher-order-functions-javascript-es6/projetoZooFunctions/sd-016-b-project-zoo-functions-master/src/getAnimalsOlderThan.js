// realizo destructuting em species para utilizar os dados.
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // utilizo a HOFs find para encontrar o animal que corresponde ao parametro informado e posteriormente, utilizo a HOF every para veirificar se todos os elementos do array residentes correspondem a condiçao de idade maior que o parametro informado e assim retornar um boolenao, true ou false.
  return species.find((spec) => spec.name === animal).residents.every((anim) => anim.age >= age);
}

module.exports = getAnimalsOlderThan;

// 2. Implemente a função getAnimalsOlderThan
// Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

// Observações técnicas

// Deve retornar um valor booleano.
// O que será avaliado

// Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada.
