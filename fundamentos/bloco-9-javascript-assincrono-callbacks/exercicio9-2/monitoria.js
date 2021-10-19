// Conteudo da aula ministrada por Tales Coelho

const pokemonCard = document.getElementById('pokemon-card');
const findPoke = document.getElementById('find-poke');

// https://pokeapi.co/api/v2/pokemon/100

// findPoke.addEventListener('click', () => {
//   const pokeNumber = document.getElementById('poke-number');
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber.value}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       pokemonCard.innerHTML = "";
//       const pokeName = document.createElement('h1');
//       const pokeImage = document.createElement('img');
//       pokeName.innerText = data.name;
//       pokeImage.src = data.sprites.front_default;
//       pokeImage.alt = "foto do pokemon";
//       pokemonCard.appendChild(pokeName);
//       pokemonCard.appendChild(pokeImage);
//       // data.front_default
//     })
//     .catch((error) => console.log(`erro: ${error}`));
// })

function fetchApi(url) {
  return fetch(url) // promisse
    .then((response) => response.json())
    .then((data) => data) // data
    .catch((error) => console.log(error)); // erro
}

// async function fetchApi(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     if (data.id % 2 === 0) {
//       return data;
//     }
//     return "o pokemon não tem o número par";
//   } catch (error) {
//     console.log(error);
//   }
// }

findPoke.addEventListener('click', async () => {
  const pokeNumber = document.getElementById('poke-number');
  const data = await fetchApi(`https://pokeapi.co/api/v2/pokemon/${pokeNumber.value}`);
  console.log(data);
  pokemonCard.innerHTML = "";
  const pokeName = document.createElement('h1');
  const pokeImage = document.createElement('img');
  pokeName.innerText = data.name;
  pokeImage.src = data.sprites.front_default;
  pokeImage.alt = "foto do pokemon";
  pokemonCard.appendChild(pokeName);
  pokemonCard.appendChild(pokeImage);
})