// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// buscar metodo para separar a string -> usar split
// usar filter ou utilizar outro reduce

function containsA() {
  const teste = names.reduce((acumulado, nome)=> 
  acumulado + nome.split('').reduce((acc, caracter)=> {
    if (caracter === 'a' || caracter ==='A'){
      return acc += 1;
    }
    return acc;
  }, 0), 0);
  
  return teste
}

console.log(containsA());