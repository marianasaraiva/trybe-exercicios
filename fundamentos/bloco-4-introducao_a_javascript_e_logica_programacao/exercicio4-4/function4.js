// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .


function quantidadeCaracteres(nomes){
  let maior = nomes[0];
  for(let index in nomes){
   if(maior.length < nomes[index].length){
     maior = nomes[index];
   }
    
  }
  return maior;
}

console.log(quantidadeCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));