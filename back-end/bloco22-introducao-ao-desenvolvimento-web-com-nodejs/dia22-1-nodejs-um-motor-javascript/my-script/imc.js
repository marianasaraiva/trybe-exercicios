const readline = require('readline-sync');


const imc = () => {
  const peso = readline.question('Qual seu peso(Ex: 50)? ');
  const altura = readline.questionInt('Qual é sua altura(Ex: 155)? ');

  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const result = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  console.log(`IMC: ${result}`);

}

imc();