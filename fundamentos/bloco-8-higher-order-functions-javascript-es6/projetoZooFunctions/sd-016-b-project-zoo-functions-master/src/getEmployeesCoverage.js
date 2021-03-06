// Discutido questão em grupo de estudos para entender a lógica.
const { species, employees } = require('../data/zoo_data');

const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const ottersId = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';
const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
const snakesId = '78460a91-f4da-4dea-a469-86fd2b8ccc84';
const frogsId = '89be95b3-47e4-4c5b-b687-1fabf2afa274';
const bearsId = 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d';
const tigersId = 'e8481c1d-42ea-4610-8e11-1752cfc05a46';

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

// console.log(getOldestFromFirstSpecies(burlId));

// Confecção da função para gerar um array de objetos para armazenar as informações do requisito e posteriormente filtrar conforme a entrada de parametros.
const objetoRetorno = () => {
  // Utilizo a HOF map no array empregados para criar um array contendo o objeto que está na const arr. O id é obtido de forma direta chamar a chave do objeto. O fullName é obtido usando o templante literals para reunir o first name e o full name. O species é obtido utilizando a HOF map para criar um array onde retorna o nome dos animais, quando utilizado junto com a HOF find pelo id e retornando o nome da espécie. o locations utiliza a mesma lógica acima, porém retornamos o local.
  const arrayResultado = employees.map((objeto) => {
    const arr = {
      id: objeto.id,
      fullName: `${objeto.firstName} ${objeto.lastName}`,
      species: objeto.responsibleFor.map((id) => species
        .find((specie) => specie.id === id).name),
      locations: objeto.responsibleFor.map((id) => species
        .find((specie) => specie.id === id).location),
    };
    return arr;
  });
  return arrayResultado;
};

console.log(objetoRetorno());

function getEmployeesCoverage(parametro) {
  if (parametro === undefined) return objetoRetorno();

  const teste2 = objetoRetorno()
    .find((element) => element.fullName.includes(Object.values(parametro))
    || element.id.includes(Object.values(parametro)));

  if (teste2 === undefined) {
    throw new Error('Informações inválidas');
  }
  return teste2;

}

// console.log(getEmployeesCoverage());
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
