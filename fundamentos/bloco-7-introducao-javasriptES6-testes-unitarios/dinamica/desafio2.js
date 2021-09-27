// Desenvolva uma função que receba um array de objetos com cidades e estados e retorne um array contendo o nome da cidade e do estado concatenados.

// Ex:
const citiesAndStates = [
  {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
  },
  {
    city: 'Salvador',
    state: 'Bahia',
  },
  {
    city: 'Porto Alegre',
    state: 'Rio Grande do Sul',
  },
  {
    city: 'Manaus',
    state: 'Amazonas',
  }
]

// Resultado esperado
//['Belo Horizonte - Minas Gerais', 'Salvador - Bahia', 'Porto Alegre - Rio Grande do Sul', 'Manaus - Amazonas']

function buildCitiesArray(citiesAndStates) {
  // Seu código aqui
  let inline = [];
  for (let i = 0; i < citiesAndStates.length; i += 1) {
    const cities = citiesAndStates[i].city;
    const states = citiesAndStates[i].state;
    inline.push(`${cities} - ${states}`);
  }
  console.log(inline);
}

buildCitiesArray(citiesAndStates);