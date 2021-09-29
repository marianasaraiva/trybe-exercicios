const sum = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number'){
    throw new Error('parameters must be numbers') ;
  }
  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
  if (item !== arr[index]) {
  newArr.push(arr[index]);
  }
  }
  return newArr;
  }

  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

  function encode(string) {
    let newPhrase = [];
    for (let index = 0; index < string.length; index += 1) {
      if (string[index] === 'a') {
        newPhrase.push(1);
      } else if (string[index] === 'e') {
        newPhrase.push(2);
      } else if (string[index] === 'i') {
        newPhrase.push(3);
      } else if (string[index] === 'o') {
        newPhrase.push(4);
      } else if (string[index] === 'u') {
        newPhrase.push(5);
      } else {
        newPhrase.push(string[index]);
      }
    }
    return (newPhrase.join(''));
  }

  function decode(string) {
    let newPhrase = [];
    for (let index = 0; index < string.length; index += 1) {
      if (string[index] === '1') {
        newPhrase.push('a');
      } else if (string[index] === '2') {
        newPhrase.push('e');
      } else if (string[index] === '3') {
        newPhrase.push('i');
      } else if (string[index] === '4') {
        newPhrase.push('o');
      } else if (string[index] === '5') {
        newPhrase.push('u');
      } else {
        newPhrase.push(string[index]);
      }
    }
    return (newPhrase.join(''));
  }

  function techList(tech, name) {
    tech.sort();
    let arr = [];
    // for para trazer cada elemento do array
    for (let index = 0; index < tech.length; index += 1) {
      // montando o array de objetos para dinamico
      arr.push({
        tech: tech[index],
        name: name,
      });
    }
    // condicional para relatar erro
    if (arr.length === 0) {
      return 'Vazio!';
    }
    return arr;
  }

  function hydrate(phrase) {
  // forma de encontrar numeros em uma string - pesquisa: YoutubeJavaScript Problem: Extracting Numbers from a String.
  let reg = /\d+/g;
  let result = phrase.match(reg);
  // percorrer o array formado para transformar em number
  for (let index in result) {
    result[index] = parseInt(result[index], 10);
  }
  // fazer a soma dos numeros do array criado
  let sum = 0;
  for (let index = 0; index < result.length; index += 1) {
    sum += result[index];
  }
  // condição para verricar quantos copos de água terão.
  if (sum > 1) {
    let string1 = ' copos de água';
    return sum + string1;
  }
  let string2 = ' copo de água';
  return sum + string2;
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate } ;
