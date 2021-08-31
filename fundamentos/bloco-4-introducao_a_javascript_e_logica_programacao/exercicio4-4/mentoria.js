/*
Dada a escala maior natural de Dó, cada uma das 7 notas possui um grau, representado por um algarismo romano:
 Dó Ré  Mi  Fá Sol Lá Si
 I  II  III IV  V  VI VII
 Escreva um código que recebe uma nota e retorna o grau dessa nota na escala de Dó.
Ex: Dó -> I
*/

let notaMusical = {
  do: 'I',
  re: 'II',
  mi: 'III',
  fa: 'IV',
  sol: 'V',
  la: 'VI',
  si: 'VII'
}

for(let ordem in notaMusical){
  console.log('A nota musical '+ ordem + ' está no grau ' + notaMusical[ordem]);
};


//Questão 2 - Um grande banco lhe contratou para fazer um programa para gerenciar um caixa eletrônico. As máquinas deste banco só possuem notas de R$10, R$50 e R$100.
//Para fazer este programa funcionar você deve coletar o saldo da pessoa e qual o valor do saque que ela quer fazer.
//Se o valor passado no saque for zero ou não for um número, exiba a mensagem: "Valor de saque inválido".
//Se o saque for maior que o saldo, exiba a mensagem: "Saldo insuficiente".
//É preciso levar em consideração o valor do saque com as possibilidades de notas do caixa eletrônico. Caso o valor não se encaixe nas possibilidades, exiba a mensagem: "Valor inválido para as notas disponíveis: R$10, R$50, R$100"
//Se estiver tudo certo com o valor do saque, subtraia o valor do saldo e exiba a mensagem: "Saque efetuado! Novo saldo: R$30".


/*
Questão 3 - Nasce um novo Array
Dados 2 arrays
A = [1, 2, 4, 5, 6]
B = [3, 9, 8, 5, 0, 2]
Crie um algoritmo que imprime um novo array com os valores em comum nos Arrays A e B ao mesmo tempo.
Obs: Não utilize o includes, você deve encontrar os valores utilizando 2 fors.
*/