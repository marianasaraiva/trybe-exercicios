//Arrays

// Exemplo de como usar o metodo indexOf()
/*
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// Retorna 1 que é o local que o item encontra no índice do array.
*/

// 1. Obtenha o valor "Serviços" do array menu :
/*let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = [];

for (let i=0; i <= menu.length-1; i++){
  
  if(menu[i] == "Serviços"){
    menuServices.push(menu[i]);
  }
}

console.log(menuServices);
*/

//2.Procure o índice do valor "Portfólio" do array menu :
/*
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);
*/

//3.Adicione o valor "Contato" no final do array menu :
/*
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato');

console.log(menu);
*/

//For
//1.Utilize o for para imprimir os elementos da lista groceryList com o console.log() :
/*
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index=0; index < groceryList.lenght; index += 1){
  console.log(groceryList[index]);
}
*/

//For/of
// Utilize o for/of para imprimir os elementos da lista names com o console.log() :
/*
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let listar of names){
  console.log(listar)
}
*/