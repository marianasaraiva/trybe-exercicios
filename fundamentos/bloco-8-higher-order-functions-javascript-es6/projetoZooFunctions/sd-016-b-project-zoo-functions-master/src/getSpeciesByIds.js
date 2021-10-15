// realizo destructuting em species para utilizar os dados.
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // ao usar o rest, o paramentro da função passa a ser um array de objetos, por este motivo, posso utilizar a HOF some para encontrar o animal/animais informados com o id no parametro.
  // console.log(ids);
  // utilizo a HOF filter para filtrar em species o ii do animal passado por parametro e retornar o array do objeto filtrado.
  return species.filter((animal) => ids.some((id) => animal.id === id));
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;

// 1. Implemente a função getSpeciesByIds
// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

// Observações técnicas

// O parâmetro desta função pode ser alterado para atender ao requisito proposto.
// O que será avaliado

// Caso receba nenhum parâmetro, necessário retornar um array vazio;
// Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
// Ao receber mais de um id, retorna um array com as espécies referentes aos ids.
