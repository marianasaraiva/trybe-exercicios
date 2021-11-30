const numberRandom = () => Math.floor(Math.random() * 101);

const upperCaseString = (string) => string.toUpperCase();

const firstLetter = (string) => string[0];

const stringsConcat = (string1, string2) => (string1 + string2)

function fetchAPI() {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json()
      .then((data) => response.ok ? Promise.resolve(data) : Promise.reject(data))
    );
}

module.exports = { numberRandom, upperCaseString, firstLetter, stringsConcat, fetchAPI };
