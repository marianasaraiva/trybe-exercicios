// // API Harry potter para brincar com objetos:
// const fetch = require('node-fetch');
// const fetchJoke = (url) => (
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => data)
// );
// async function apiFetch() {
//   const data = await fetchJoke('http://hp-api.herokuapp.com/api/characters');
//   console.log(data);
// }
// apiFetch();

// API com outra forma de escrita!
const fetch = require('node-fetch');
const fetchJoke = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
);
async function apiFetch() {
  const response = await fetch('http://hp-api.herokuapp.com/api/characters');
  const data = response.json();
  console.log(data);
}
fetchJoke('http://hp-api.herokuapp.com/api/characters');
apiFetch();