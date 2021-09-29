// Feature 1 - Quando apontamos a câmera da Pokedex para um Pokemon precisamos guardar as informações do nosso monstrinho na memória da  Pokedex.
// As informações são:
// Nome - String,
// Level - um inteiro entre 1 e 50,
// Ataque - um inteiro entre 1 e 345,
// Defesa - um inteiro entre 1 e 400
// Crie uma função que recebe Nome, Level, Ataque e Defesa e guarda essas informações em um objeto
// Feature 2 - A pokedex vem equipada com um botão para exibir os pokemons que estão salvos na memória da pokedex.
// Crie uma função que exiba as informações de todos os pokemons em memória no seguinte formato:
// "Nome - Level - Ataque - Defesa"

const pokedex = (nome, level, ataque, defesa) => {
  let nomePoke = '';
  if (typeof(nome) === 'string'){
    nomePoke = nome;
  }

  if (level > 0 && level <= 50) {
    parseInt(level);
  } else {
    return "Level não aceito";
  }

  if (ataque > 0 && ataque <= 345) {
    parseInt(ataque);
  }  else {
    return "Nível de ataque não aceito";
  }

  if (defesa > 0 && defesa <= 400) {
    parseInt(defesa);
  }  else {
    return "Nível de defesa não aceito";
  }
  
  let pokemon = {
    nome: nome,
    level: level,
    ataque: ataque,
    defesa: defesa
  }

  const saved = Object.assign({}, {pokemon});
  // console.log(saved);
  return saved;
}

console.log(pokedex('Pikachu', 10, 200, 300));
console.log(pokedex('Charizard', 10, 200, 300));
console.log(pokedex('Mew', 10, 200, 300));
console.log(pokedex('Greninja', 10, 200, 300));


