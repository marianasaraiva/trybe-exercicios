const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // condição de verificação para quando não ouver parametros ao chamar a função retorne um objeto vazio.
  if (employeeName === undefined) return {};
  // usei a HOF find para encontrar o elemento de acordo com firstName e lastName do colaborador, e o retorno será o objeto completo que atenda aos parametros informados na chamada da função.
  return employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}

// console.log(getEmployeeByName('Emery'));
// console.log(getEmployeeByName('Wishart'));
// console.log(getEmployeeByName());

module.exports = getEmployeeByName;

// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

// O que será avaliado

// Sem parâmetros, retorna um objeto vazio
// Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// Quando provido o último nome do funcionário, retorna o objeto do funcionário
