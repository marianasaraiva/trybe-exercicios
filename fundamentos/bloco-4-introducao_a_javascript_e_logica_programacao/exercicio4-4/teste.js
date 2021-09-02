// const elemento = ['arroz', 'feijao', 'sal'];
// console.log(elemento.join(''));
// console.log(elemento.reverse());
// const myString = 'Amo estudar na trybe';
// const splits = myString.split(' ');
// console.log(myString);
// console.log(splits);


//6.Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.

//Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.

//   let numberRepete = 1;
//   let numberFirst = 0;
//   for (let index = 0; index < arr.length; index += 1){
  //     if (arr[index] !== numberFirst){
    //       numberFirst ++
    //     } else {
      //       numberRepete++
      //     }
      //   }
      // return numberRepete;
//}


// ESSA FOI A CERTA QUE SUBMETI AO PROJETO.
// function highestCount(arr) {
//   arr.sort(function(a,b) {
//     //oredenar em ordem decrescente, considern
//     return b-a;
//   });
//   let highNumberRepete = 0;
 
//   for(let position in arr){
//     if(arr[position] === arr[position.length - 1]){
//       highNumberRepete ++
//     }
//   }
//   return highNumberRepete;
// }
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// function highestCount(arr) {
//   arr.sort();
//   let highNumberRepete = '@@@';
//   console.log(arr);
//   for(let index = 0; index < arr.length; index += 1){
//     //console.log('----');
//     console.log(arr[index]);
//     if((arr.length - 1) === arr[index]){
//       console.log('****');
//       highNumberRepete++
//     }
//   }
//   return highNumberRepete;
// }
// console.log(highestCount([0, 0, 0]));

/*
Crie uma função de Lista de Tecnologias
Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome.

Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

{
  tech: "NomeTech",
  name: name
}
Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech no objeto.

A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.

Exemplo:

Entradas da função:

["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas"

// Saída:

[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
*/
/*
function techList(tech, name) {
  let objTech = [];

  //retorna o array tech + name.
  for (let index = 0; index < tech.length; index += 1){
    //criar a objeto Tech junto com o name
    let teste = (tech[index] + ' ' + name);
    objTech.push(teste);
    return objTech
  }
  for (let value of objTech){
    console.log(value);
  }

  
    // for(let index2 = 0; index2 < name.lenght; index2 +=1){
    //    console.log(name[index]);
    //  }
  
     

  //console.log(tech);
  //console.log(name);
  //console.log(objTech[tech]);
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
*/



/*
function techList(tech, name) {
  tech.sort(); 
  let objTech = {
    tech: tech,
    name: name,
  };
  
  newArr = [];

  console.log(objTech);

  //console.log(objTech.name);
  for (let index = 0; index < objTech.tech.length; index += 1) {
    newArr.push(objTech.tech[index], objTech.name);
  }

  for(let position in newArr){
    console.log(newArr[position]);
  }
  
  return obj
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
*/  

  
// function techList(tech, name) {
//   tech.sort(); 
  
//   for (let index = 0; index < tech.length; index += 1) {
  
//     let arr = { 
//       tech: tech, name: name
//     };
//     return arr;
//   }

// }

// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));    

function techList(tech, name) {
  tech.sort(); 
  let arr = [];
  // for para trazer cada elemento do array
  for (let index = 0; index < tech.length; index += 1) {
   //montando o array de objetos para dinamico 
    arr.push({
      tech: tech[index], 
      name: name
      }) 
  }
  
  if (arr.length === 0){
    return "Vazio"
  } else {
    return arr;
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));  