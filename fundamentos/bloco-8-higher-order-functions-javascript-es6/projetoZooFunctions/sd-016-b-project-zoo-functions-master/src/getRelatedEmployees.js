// Questão discutida em grupo de estudos.
const { employees } = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(id) {
  // Condiçao para verificar se o id informado como parametro corresponde ao de gerente. O teste informa quais são os gerentes -> const managers = [stephanieId, olaId, burlId];
  if (id === stephanieId || id === olaId || id === burlId) {
    // usei a HOF some par buscar o Id informado acima, retornando true.
    return employees.some((manager) => manager.id === id);
  }
  return false;
}
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  // Guarda o resultado da função em uma variavel.
  const resultado = isManager(managerId);
  // condição para verificar se o id passado ao invocar a função é um gerente, e caso seja falso, retornar o erro.
  if (resultado !== true) {
    // insere o erro se o id pesquisado nao seja de um gerente.
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  // utilizo a HOF filter para filtrar o array employees e acessar o  array managers com a HOF some e verificar se o ID do gerente  é igual ao parametro informado na função e por último, utilizo a HOF map para retornar um array comnome dos funcionários que o gerente é responsável.
  return employees.filter((employee) => employee.managers
    .some((value) => value === managerId))
    .map((names) => `${names.firstName} ${names.lastName}`);
}
// console.log(getRelatedEmployees(stephanieId));

module.exports = { isManager, getRelatedEmployees };

// 4. Implemente a função getRelatedEmployees
// Considerando a boa prática de dividir o código em partes menores, apresentamos a função getRelatedEmployees em que você deverá dividí-la em duas funções:

// 1 - isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;

// 2 - getRelatedEmployees - que utiliza a primeira função para apresentar as seguintes saídas:

// se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
// se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".
