/*
1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
*/


function verificaPalindrome(palavra){
  return palavra === palavra.split('').reverse().join('');
  // arara === arara
};

//{ a, r, a, r, a }
// { a, r, a, r, a }
//arara


console.log(verificaPalindrome('arara'));




/* Gabarito
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
*/
