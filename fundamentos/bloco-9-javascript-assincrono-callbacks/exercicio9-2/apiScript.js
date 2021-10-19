// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, { method: 'GET',headers: { 'Accept': 'application/json' } })
    .then(response => response.json())
    .then(data => 
      // linha para imprimir no console.log a piada
      document.getElementById('jokeContainer').innerText = data.joke
      );
};

window.onload = () => fetchJoke();


