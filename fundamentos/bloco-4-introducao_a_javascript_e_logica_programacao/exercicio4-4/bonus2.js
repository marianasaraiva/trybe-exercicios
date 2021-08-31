//2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
// console.log(vector[0]);

function arrayOfNumbers(vector){
  let numbers = [];
  //for para percorrer o array arrayofNumbers
  for (let index = 0; index < vector.length; index += 1) {
    //for para varrer os valores do array.
    for(let index2 in vector[index]){
      //console.log(vector[index][index2]);
      //condicional para verificar quais são os números pares.
        if(vector[index][index2] % 2 === 0){
          numbers.push(vector[index][index2]);
        }
    }
   
  }
  return numbers
}

console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));