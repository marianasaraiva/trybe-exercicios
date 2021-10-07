// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // concat() => Arrays ou valores para concatenar (unir) ao array retornado.
  // return arrays.reduce((acc, value) => acc.concat(value)); // outra forma de fazer que funciona.
  const newArr = arrays.reduce((acumulador, array) => acumulador.concat(array), []);
  return newArr;
  // return arrays.reduce((acumulador, array) => acumulador + array ); // 1,2,3true4,5,6 (retorna errado, como se fosse uma string)
}

console.log(flatten());