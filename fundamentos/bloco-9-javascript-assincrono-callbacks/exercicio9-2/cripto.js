// const URL = 'https://api.coincap.io/v2/assets';

// const criptoMoedas = async () => {
//   const moeda = await fetch(URL)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log('Seu erro é:', error))
//   return moeda;
// };

// const moedalista = async () => {
//   const moeda = await criptoMoedas();

//   const moedaUL = document.getElementById('lista');

//   moeda.forEach((item) => {
//     const li = document.createElement('li');
//     const precoDolar = Number(item.priceUsd);
//     li.innerText = `${item.name} (${item.symbol}): ${precoDolar.toFixed(2)}`;
//     moedaUL.appendChild(li);
//   });
// }

// moedalista()
// window.onload = () => moedalista();


const append = ({ data }) => {
  const ul = document.querySelector('#lista');
  data.filter((filter, index) => index < 10).forEach((item) => {
    const li = document.createElement('li');
    // const precoDolar = Number(item.priceUsd);
    // li.innerText = `${item.name} (${item.symbol}): ${precoDolar.toFixed(2)}`;
    li.innerText = `${item.name} (${item.symbol}): ${Number(item.priceUsd).toFixed(2)}`;
    ul.appendChild(li);
  });
}

const criptoMoedas = (url) => {
  fetch(url)
  .then((response) => response.json())
    .then((data) => append(data))
    // console.log(data);
    .catch ((error) => console.log('Seu erro é:', error))
    // return teste;
  };
  
criptoMoedas('https://api.coincap.io/v2/assets');
