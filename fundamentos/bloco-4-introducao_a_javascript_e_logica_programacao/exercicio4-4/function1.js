/*
1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
*/


// function verificaPalindrome(palavra){
// var palindromo = '';
// for (let index = palavra.length -1; index >= 0; index -= 1) {
//   palindromo += palavra[index];
// }
// if(palavra === palindromo){
//   return true
// } else {
//   return false
// }
// }

// console.log(verificaPalindrome(arara))

function verificaPalindrome(word){
  for(index in word){
    if(word[index] != word[(word.length - 1) - index]){
      return false;
    }
  }
  return true;
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));