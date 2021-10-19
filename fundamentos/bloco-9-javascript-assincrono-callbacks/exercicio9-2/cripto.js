// https://api.coincap.io/v2/assets
// const fetch = require('node-fetch');

const append = (data) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  innerText = data[0].name;
  ul.appendChild(li);
}

const criptoMoedas = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => append(data))
    .catch ((error) => console.log('Seu erro é:', error))
};

async function apiCripto() {
  const data = await criptoMoedas('https://api.coincap.io/v2/assets');
  return data;
}
apiCripto();