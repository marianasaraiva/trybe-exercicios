const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// usei o rest no parametro pois o numero de parametros poderia ao ser invocada a funçao.
// usei a HOF filter para filtrar o species e usei a HOF some para retornar um array com o objeto que contem o id localizado.
function getSpeciesByIds(...ids) {
  console.log(ids);
  return species.filter((animal) => ids.some((id) => animal.id === id));
}
// console.log(getSpeciesByIds());
console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));
// console.log(getSpeciesByIds(
//   '0938aa23-f153-4937-9f88-4858b24d6bce',
//   'e8481c1d-42ea-4610-8e11-1752cfc05a46',
// ));
module.exports = getSpeciesByIds;

// 1. Implemente a função getSpeciesByIds
// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

// Observações técnicas

// O parâmetro desta função pode ser alterado para atender ao requisito proposto.
// O que será avaliado

// Caso receba nenhum parâmetro, necessário retornar um array vazio;
// Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
// Ao receber mais de um id, retorna um array com as espécies referentes aos ids.
