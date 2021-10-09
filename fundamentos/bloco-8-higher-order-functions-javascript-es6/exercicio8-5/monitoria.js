// Dado um arquivo com dados de regiões, estados e cidades, construir uma função (mapCities)
// que retorna um objeto onde as propriedades são as siglas das regiões. Cada região é um array
// que possuirá objetos com o nome da cidade e o nome do estado.
// 
// Bônus: Se a função receber um objeto com a propriedade includeRegionNames com o valor true,
// o objeto de cada cidade/estado incluirá também o nome da região onde aquele estado se encontra.

const regions = [
  { short: 'N', name: 'Norte' },
  { short: 'NE', name: 'Nordeste' },
  { short: 'CW', name: 'Centroeste' },
  { short: 'SE', name: 'Sudeste' },
  { short: 'S', name: 'Sul' },
];

const states = [
  { short: 'AM', name: 'Amazonas' },
  { short: 'PA', name: 'Pará' },
  { short: 'TO', name: 'Tocantins' },
  { short: 'MG', name: 'Minas Gerais' },
  { short: 'BA', name: 'Bahia' },
  { short: 'PR', name: 'Paraná' },
  { short: 'SP', name: 'São Paulo' },
  { short: 'RN', name: 'Rio Grande do Norte' },
  { short: 'CE', name: 'Ceará' },
];

const cities = [
  { state: 'AM', name: 'Manaus', region: 'N' },
  { state: 'PA', name: 'Belém', region: 'N' },
  { state: 'TO', name: 'Porto Nacional', region: 'N' },
  { state: 'MG', name: 'Lavras', region: 'SE' },
  { state: 'BA', name: 'Feira de Santana', region: 'NE' },
  { state: 'PR', name: 'Cascavel', region: 'S' },
  { state: 'SP', name: 'Presidente Prudente', region: 'SE' },
  { state: 'RN', name: 'Touros', region: 'NE' },
  { state: 'CE', name: 'Jericoacoara', region: 'NE' },
];

const mapCities = (includeRegionNames) => {
  const cidades = cities.map((city) => {
    const estados = states.find((state) => state.short === city.state);
    const regiao = regions.find((region) => region.short === city.region);
    if(includeRegionNames) {
      return {
        name: city.name,
        estado: estados.name,
        regiao: regiao.name,
      } 
    } else {
      return {
        name: city.name,
        estado: estados.name,
      }
    }
  });
  return cidades;
}

console.log(mapCities(true));