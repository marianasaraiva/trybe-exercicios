/*
//1. Faça um algoritmo usando a estrutura "FOR" que escreva 50 vezes seu nome no terminal.
for(var i = 0; i <= 50;i++){
  console.log("LUIZ WANDERSON: " +i);
  } 

//2.Escreva um algoritmo que imprima os números inteiros do intervalo de 100 a 200 em ordem decrescente.
for(var i=200; i>= 100; i--){
  console.log(i);
} 

//3.Ímpar: A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50. Crie um algoritmo que exibe todos os números inteiros ímpares desse intervalo.
for(var i = 0; i <= 50; i++){
if(i % 2){
console.log(i);
}
}

//4.Par: A Dora aventureira gostaria de ter uma lista com todos o números pares entre 1 e 50. Crie um algoritmo que exibe todos os números inteiros pares desse intervalo.
for(var i = 0; i <= 50; i++){
if(!(i % 2)){
console.log(i);
}
}

//5. Dada uma lista de números inteiros,
//const numbers = [3, 1, 8, 34, 13, 2, 5];
//escreva um algoritmo que retorne o MAIOR número da lista. 

const numbers = [3,1,8,34,13,2,5];
var maiornumero = 0;

for(var i = 0; i <= numbers.length; i++){

if(numbers[i] > maiornumero){
maiornumero = numbers[i];
}
}
console.log(maiornumero); 

*/
//6.Crie um algoritmo que verifica se o nome da Mica está dentro do array de pessoas facilitadoras da Trybe.
//let facilitators  = [Silvia, Isa, Marina, Mica, Amanda, Karine]
//Seu algoritmo deve exibir a mensagem:
// "O nome da Mica está no array."
//Caso o nome da Mica exista dentro array.
//Caso contrário, exiba "Não faz parte".

let facilitators  = ["Silvia", "Isa", "Marina", "Mica", "Amanda", "Karine"];
const resultado = [];
for(let item of facilitators){
  if(item == "Mica"){
    resultado.push(item);
  }else{
    console.log("Não faz parte")
  }
}

console.log("O nome da " + resultado + " está no array.");

//Elabore uma função que verifica se todos os elementos de um array são do mesmo tipo.
//A função deve retornar true caso todos os elementos pertençam ao mesmo tipo (type) ou false caso algum elemento não seja do mesmo tipo.