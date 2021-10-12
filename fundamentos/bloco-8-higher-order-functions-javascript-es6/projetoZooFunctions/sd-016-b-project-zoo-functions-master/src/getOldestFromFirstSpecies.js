const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const teste = data.employees.find((func) => func.id === id).responsibleFor
    .find((animal) => animal[0]);
  const animalObj = data.species.find((specie) => specie.id === teste).residents;
  const filtro = Object.values(animalObj.sort((a, b) => a.age - b.age)[animalObj.length - 1]);
  return filtro;
}

// console.log(getOldestFromFirstSpecies(burlId));

module.exports = getOldestFromFirstSpecies;

// 9. Implemente a função getOldestFromFirstSpecies
// A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro.

// O que será avaliado

// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.
