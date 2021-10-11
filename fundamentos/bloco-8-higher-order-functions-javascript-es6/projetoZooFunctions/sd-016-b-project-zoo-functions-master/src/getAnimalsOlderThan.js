const data = require('../data/zoo_data');

// usei a HOF find para encontrar o nome do animal e a HOF every para verificar se todas as idades do array residents contido em species atendia ao requisitito idade minima.
function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  return species.find((spec) => spec.name === animal).residents.every((anim) => anim.age > age);
}

console.log(getAnimalsOlderThan('otters', 7));
// console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;

// 2. Implemente a função getAnimalsOlderThan
// Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

// Observações técnicas

// Deve retornar um valor booleano.
// O que será avaliado

// Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada.
