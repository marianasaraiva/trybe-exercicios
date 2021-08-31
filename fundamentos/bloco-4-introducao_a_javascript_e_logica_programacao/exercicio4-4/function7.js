// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false
// split -> espera dois argumentos ao mesmo tempo, onde separar
// join -> espera dois argumentos ao mesmo tempo, onde juntar
// reverse ->

function comparar(string1, string2){
  //fazer laço de repetição
  let retorno = 0;
  let retornoEsperado = string2.length;
  for(let i = string1.length - string2.length; i < string1.length; i += 1){
    for(let i2 = 0; i2 < string2.length; i2 +=1){
      //console.log(string1[i], string2[i2]);
      if(string1[i] === string2[i2]){
        retorno = retorno + 1;
      }
    }   
  }

  return retornoEsperado === retorno;
    
}

console.log(comparar('trybe','be'));

