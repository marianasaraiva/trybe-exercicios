// Soft Skills Assertividade:
// 1- V Um homem apareceu após o proprietário ter apagado a luz de sua loja.
// 2- ? O ladrão era um homem.
// 3- V O homem não exigiu dinheiro.
// 4- V O homem que abriu a caixa registradora era o proprietário.
// 5- ? O proprietário da loja esvaziou o conteúdo da caixa registradora.
// 6- V Após ter esvaziado o conteúdo da caixa registradora, o homem fugiu.
// 7- V A história refere-se a uma série de acontecimentos onde se faz referência a apenas 3 pessoas: o proprietário da loja, um homem que pediu dinheiro e um membro da força policial.
// 8- V Os seguintes acontecimentos da loja são verdadeiros: alguém exigiu dinheiro, uma caixa registradora foi aberta, seu conteúdo foi esvaziado e um homem saiu correndo.

// const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];


// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
function oldBooks() {
  // escreva seu código aqui
}

console.log(oldBooks());

