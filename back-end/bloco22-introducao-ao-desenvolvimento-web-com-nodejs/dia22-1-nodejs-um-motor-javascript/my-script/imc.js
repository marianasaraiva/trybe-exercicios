const readline = require('readline-sync');


const imc = () => {
  const peso = readline.questionFloat('Qual seu peso(Ex: 50.0)? ');
  const altura = readline.questionInt('Qual é sua altura(Ex: 155)? ');

  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const result = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  if (result < 18.5) {
    console.log(`IMC: ${result}, Classificação: Abaixo do peso (magreza)`);
  } else if (result <= 24.9) {
    console.log(`IMC: ${result}, Classificação: Peso normal`);
  } else if (result <= 29.9) {
    console.log(`IMC: ${result}, Classificação: Acima do peso (sobrepeso)`);
  } else if (result <= 34.9) {
    console.log(`IMC: ${result}, Classificação: Obesidade grau I`);
  } else if (result <= 39.9) {
    console.log(`IMC: ${result}, Classificação: Obesidade grau II`);
  } else {
    console.log(`IMC: ${result}, Classificação: Obesidade graus III e IV`);
  }
}

imc();