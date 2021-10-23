// const fetch = require('node-fetch');

const search = document.querySelector('.search');
const character = document.querySelector('.character');
const input = document.querySelector('.input-character');
const button = document.querySelector('.button');
const sectionPrincipal = document.querySelector('.cards-character');

const url = 'http://hp-api.herokuapp.com/api/characters';
const fetchAPI = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

const objectAPI = async () => {
  const objectCharacter = await fetchAPI('http://hp-api.herokuapp.com/api/characters');
  return objectCharacter.map((item) => {
    // const sectionPrincipal = document.querySelector('.items');
    const result = createCart(item);
    sectionPrincipal.appendChild(result);
  });
};


function createImage(image) {
  const img = document.createElement('img');
  img.className = 'image';
  img.src = image;
  return img;
}
function createElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

const createCart = ({ name, house, patronus, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createElement('span', 'item_name', name));
  section.appendChild(createElement('span', 'item_house', house));
  // section.appendChild(createElement('span', 'item_patronus', patronus));
  section.appendChild(createImage(image));
  return section;
}

window.onload = () => objectAPI();