const readline = require('readline-sync');

const sorteio = (numeroInformado, numeroRandomico) => {
  if(numeroInformado === numeroRandomico) {
    console.log('Parabéns, número correto!');
  } {
    console.log(`Opa, não foi dessa vez. O número era ${numeroRandomico}`);
  }
}

const game = () => {
  const numeroInformado = readline.questionInt('Informe um número entre 1 e 10? ');

  const numeroRandomico = Math.round((Math.random() * (10 - 1)) + 1);

  sorteio(numeroInformado, numeroRandomico);

  const jogarNovamente = readline.question('Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) ');

  if (jogarNovamente !== 's') return console.log('OK, até a próxima!');

  game();
}
game();