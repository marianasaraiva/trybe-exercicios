// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

function maiorPalavra (fraseInformada) {
 let frase = fraseInformada.split(' ');
 let maior = 0;
 let palavraMaior = '';

 for (let palavra of frase) {
    if(palavra.length > maior) {
      maior = palavra.length;
      palavraMaior = palavra;
    }
 }
 return palavraMaior;
}

console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));
