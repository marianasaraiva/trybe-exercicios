const data = require('../data/zoo_data');

// console.log(data.prices.child);

function countEntrants(entrants) {
  // usei a HOF filter para filtrar o array fornecido como parametro, orientei as condicionais e busquei o tamanho dele para retornar o número de itens que corresponde ao numero de visitante por idade.
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;
  // Utilizado as shortshands para o retorno do objeto
  return { child, adult, senior };
}
// console.log(countEntrants(entrants));

function calculateEntry(entrants) {
  // Nenhum argumento passado retorna false -> !entrants; objeto vazio -> Object.values(entrants).length;
  if (!entrants || Object.values(entrants).length === 0) return 0;
  // armazena o retorno da funçao em uma variavel para obter o objeto e manipular para obter os values e assim efetuar a multiplicação.
  const numeroVisitante = countEntrants(entrants);
  // console.log(numeroVisitante);
  const numeroChild = numeroVisitante.child * data.prices.child;
  const numeroAdult = numeroVisitante.adult * data.prices.adult;
  const numeroSenior = numeroVisitante.senior * data.prices.senior;
  return numeroChild + numeroAdult + numeroSenior;
}

// console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };

// Você deve isolar a parte da lógica na função countEntrants que se encontra no mesmo arquivo da função calculateEntry. Ela deverá receber o array de visitantes e retornar um objeto com a contagem de acordo com os seguintes critérios de classificação:

// Pessoas com idade menor que 18 anos são classificadas como crianças (child);
// Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
// Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).
