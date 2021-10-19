const criptoMoedas = (url) => {
  fetch(url)
  .then((response) => response.json())
  .then((data) => append(data))
  .catch ((error) => console.log('Seu erro é:', error))
};
criptoMoedas('https://api.coincap.io/v2/assets');

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

