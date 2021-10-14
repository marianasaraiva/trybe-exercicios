const data = require('../data/zoo_data');

// usei a HOF find para encontrar o elemento de acordo com firstName e lastName do colaborador, uma vez que ele retornou um objeto.
const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}

console.log(getEmployeeByName('Emery'));
console.log(getEmployeeByName('Wishart'));
console.log(getEmployeeByName());

module.exports = getEmployeeByName;

// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

// O que será avaliado

// Sem parâmetros, retorna um objeto vazio
// Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// Quando provido o último nome do funcionário, retorna o objeto do funcionário
