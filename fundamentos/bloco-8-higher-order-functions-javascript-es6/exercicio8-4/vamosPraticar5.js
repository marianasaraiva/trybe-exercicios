// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// buscar metodo para separar a string -> usar split
// usar filter ou utilizar outro reduce

function containsA() {
  return names.reduce((acumulado, nome)=> 
  acumulado + nome.split('').reduce((acc, name)=> {
      if (name === 'a' || name ==='A'){
        return acc += 1;
      }
      return acc;
    }, 0), 0);
}

console.log(containsA());