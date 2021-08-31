/*
Depois, faça uma pirâmide com n asteriscos de base:
n = 5

  *
 ***
*****

*/

let n = 5;
let lista = "";
for ( let index = 0; index < n; index += 1){
lista = "";

for(let thirdIndex =0 ; thirdIndex < (n-index) ; thirdIndex+=1){
lista = lista + " ";
}

for(let secondIndex = 0; secondIndex <= index; secondIndex += 1){
lista += "* ";
}

console.log(lista);
} 

/*
// 4- Depois, faça uma pirâmide com n asteriscos de base:
// n = 5
//   *
//  ***
// *****
​
// 1 - criar uma variavel n
let n = 6;
// 2 - criar a variavel de asteristicos
let ast = '';
// 3 - variavel para espaços em branco #
let space = '';
// 4 - variavel para definir quantas vezes nosso laço vai se repetir
let x = (n + 1)/ 2;
// 5 - criar um laço de repetição
for (let index = 0; index < x; index += 1) {
  // 6 - inserir nos espaços
  space = '';
  for (let indexB = 0; indexB < x - index - 1; indexB += 1) {
    space += ' ';
  }
  // 7 - inserir os asteristicos
  if (index === 0) {
    ast = '*';
  } else {
    ast += '**';
  }
  // 8 - imprimir a linha
  console.log(space + ast);
}
*/