const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  return employees.map((manager) => manager.managers === id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
// console.log(getRelatedEmployees());

module.exports = { isManager, getRelatedEmployees };

// 4. Implemente a função getRelatedEmployees
// Considerando a boa prática de dividir o código em partes menores, apresentamos a função getRelatedEmployees em que você deverá dividí-la em duas funções:

// 1 - isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;

// 2 - getRelatedEmployees - que utiliza a primeira função para apresentar as seguintes saídas:

// se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
// se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".