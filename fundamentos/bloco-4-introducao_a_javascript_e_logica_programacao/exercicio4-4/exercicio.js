/* 
//Objetos
1 - Crie um objeto player contendo as variáveis listadas abaixo.
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
*/

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {golden: 2, silver: 3},
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

//2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor jogadora do mundo por ' + player.bestInTheWorld.length + ' vezes.');

//5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

//For/in
// Exemplos de For/in
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

// Exemplos de For/in
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

// Entretanto, é importante ressaltar que existe uma diferença entre o For/in e o For/of , que vimos anteriormente. Como dito no vídeo, o For/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades. Por exemplo, se tivermos um array com três strings dentro:

let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;

// Já o For/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o For/in . Vejamos o exemplo:

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;

// Exercício de fixação
// 1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for(let position in names){
  console.log('Olá, ' + names[position]);
};

// 2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(let chaves in car){
  console.log(chaves + ' ' + car[chaves]);
};

// Funções
// Refatorar os exercícios do ínicio do bloco de Java Scrip dia 4.1
/*
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/

//adição
function sum(a, b) {
  let resultado = a + b;
  return resultado;
}

console.log(sum(5, 4));

//subtração
function subtrair(a, b) {
  return a-b;
}

console.log(subtrair(5, 2));

//multiplicação
function multiplicar(a, b){
  return a * b;
}

console.log(multiplicar(3, 8));

//divisão
function dividir(a, b) {
  return a / b;  
}

console.log(dividir(10, 2));

//módulo
function modulo(a, b) {
  return a % b;  
}

console.log(modulo(12,5));



