const { species } = require('../data/zoo_data');

const arrayLocal = ['NE', 'NW', 'SE', 'SW'];

const objetoGeral = () => arrayLocal.reduce((acc, element) => {
  acc[element] = species.filter((animal) => animal.location === element).map((elem) => elem.name);
  return acc;
}, {});

// console.log(objetoGeral());

// const animalSex = () => {
//   const anim = objetoGeral();
//   return anim.reduce(((acc, animal) => {
//     acc[animal] = species
//       .find((obj) => obj.name === animal).residents
//       .map((nomeBicho) => nomeBicho.name);
//     return acc;
//   }, {}));
// };

// console.log(animalSex());

function getAnimalMap(options) {
  return objetoGeral();
}

console.log(getAnimalMap());

// const expected = {
//   NE: ['lions', 'giraffes'],
//   NW: ['tigers', 'bears', 'elephants'],
//   SE: ['penguins', 'otters'],
//   SW: ['frogs', 'snakes'],
// };

module.exports = getAnimalMap;
