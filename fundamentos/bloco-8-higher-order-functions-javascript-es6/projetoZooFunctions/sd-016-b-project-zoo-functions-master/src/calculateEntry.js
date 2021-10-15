const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// Função para verificar a quantidade de pessoas por idade.
function countEntrants(entrants) {
  // usei a HOF filter para filtrar o array fornecido como parametro, realizei a regra de negócio das condicionais e busquei o tamanho do array com o length para retornar o número de itens que corresponde ao numero de visitante por idade.
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;
  // Utilizado as shortshands para o retorno do objeto
  return { child, adult, senior };
}
// console.log(countEntrants(entrants));

function calculateEntry(entrants) {
  // Condição para verificar se nenhum argumento passado sinaliza false -> !entrants, portanto retorna 0 como setado no return deste if; objeto vazio -> Object.values(entrants).length, também retornando 0.;
  if (!entrants || Object.values(entrants).length === 0) return 0;
  // const numeroVisitantes armazena o retorno da funçao em uma variavel para usar o nome da constante e acessar o objeto e consequentemente os values para efetuar a multiplicação com os values do objeto Prices.
  const numeroVisitante = countEntrants(entrants);
  const numeroChild = numeroVisitante.child * data.prices.child;
  const numeroAdult = numeroVisitante.adult * data.prices.adult;
  const numeroSenior = numeroVisitante.senior * data.prices.senior;
  return numeroChild + numeroAdult + numeroSenior;
}

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };

// Você deve isolar a parte da lógica na função countEntrants que se encontra no mesmo arquivo da função calculateEntry. Ela deverá receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de classificação:

// Pessoas com idade menor que 18 anos são classificadas como crianças (child);
// Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
// Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).
