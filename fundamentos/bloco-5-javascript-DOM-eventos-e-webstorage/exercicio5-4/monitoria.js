const inputList = document.getElementById('input-list');
const addButton = document.getElementById('add-button');
const shoppingList = document.getElementById('shopping-list');
const headerPrincipal = document.getElementById('header-principal');

addButton.addEventListener('click', function() {
  if(inputList.ariaValueMax.length > 3) {
    let elementLi = document.createElement('li');
    elementLi.innerText = inputList.value;
    shoppingList.appendChild(elementLi);
    inputList.value = "";
  }

  if(localStorage.listaCompra){
    let localCompra = JSON.parse(localStorage.getItem('listaCompra'));
    localCompra.push(elementLi.innerText);
    localStorage.setItem('listaCompra', JSON.stringify(localCompra));
  } else {
    let arr = [elementLi.innerText];
    localStorage.setItem('listaCompra', JSON.stringify(arr));
  }

});

shoppingList.addEventListener('dbclick', function (event){
  if(event.target.tagName === 'LI')
  event.target.classList.toggle('comprado')
  });

window.onload = () => {
  let localCompra = JSON.parse(localStorage.getItem('listaCompra'));
  
  // for ( let index = 0; index < localCompra.length; index += 1){
  //   let elementLi = document.createElement('li');
  //   elementLi.innerText = localCompra[index];
  //   shoppingList.appendChild(elementLi);
  // }
};
