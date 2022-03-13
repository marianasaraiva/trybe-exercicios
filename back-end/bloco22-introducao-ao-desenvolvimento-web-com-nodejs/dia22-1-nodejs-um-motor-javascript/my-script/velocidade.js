const readline = require('readline-sync');

const velocidade = () => {
  const distancia = readline.questionInt('Qual a distância(Ex: 10)? ');
  const tempo = readline.questionInt('Qual o tempo(Ex: 60)? ');

  const result = (distancia / tempo).toFixed(2);
  console.log(`A velocidade média é: ${result} m/s`);

}

velocidade();