function criarEstados() {
  let estadosSelect = document.querySelector('#estado');
  let estadosBrasil = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < estadosBrasil.length; index += 1) {
    let estadosOption = document.createElement('option');
    estadosSelect.appendChild(estadosOption).innerText = estadosBrasil[index];
    estadosSelect.appendChild(estadosOption).value = estadosBrasil[index];
  }
}
// função para validar a Data, utilizando o split.
function validarData() {
  let inputValueData = document.querySelector('#data').value;
  if (inputValueData === '') {
    return alert('Preenher a data');
  }
  let pedacoInput = inputValueData.split('/');
  let dia = pedacoInput[0];
  let mes = pedacoInput[1];
  let ano = pedacoInput[2];
  if (pedacoInput[0] < 0 && pedacoInput[0] > 31) {
    return alert('Erro no dia');
  }
  if (pedacoInput[1] < 0 && pedacoInput[1] > 12) {
    return alert('Erro no dia');
  }
  if (pedacoInput[2] < 0) {
    return alert('Erro no dia');
  }
  // return `${dia}/${mes}/${ano}`;
  return true;
}

let bodyPai = document.querySelector('body');
let divContainer = document.createElement('div');
divContainer.className = 'div-elementos'
bodyPai.appendChild(divContainer);

//selecionar todos os ids que precisam ser recuperados na div.
let nome = document.getElementById('name');
let email = document.getElementById('email');
let cpf = document.getElementById('cpf');
let endereco = document.getElementById('endereco');
let cidade = document.getElementById('cidade');
let estado = document.getElementById('estado');
let cargo = document.getElementById('cargo');
let descricao = document.getElementById('descricao');
let data = document.getElementById('data');

let valorMarcadoLocadouro = "";
console.log(valorMarcadoLocadouro);
function enviarEventoButton(event) {
  event.preventDefault();
  if (validarData()) {
    // como estava retornando um NodeList, foi necessário essa lógica para recuperar o valor deste item.
    // usar o atraves da tagName name do html para pegar o item em comum
    let logadouro = document.getElementsByName('logadouro');
    for (let i = 0; i < logadouro.length; i += 1) {
      if (logadouro[i].checked) {
        valorMarcadoLocadouro = logadouro[i].value;
      }
    }
    // for para encontrar o value do array de inputs do form
    let arr = [nome, email, cpf, endereco, cidade, estado, cargo, descricao, data];
    let retornoElementoArray = '';
    for (let index = 0; index < arr.length; index += 1) {
      retornoElementoArray += arr[index].value;
    }
    // concatenado o value do radio e input da página
    divContainer.innerHTML = valorMarcadoLocadouro + retornoElementoArray;
  }
}
// funçao para excluir a div que contem os inputs pedidos na questao 3. 
function limparButton() {
  let bodyPai = document.querySelector('body');
  bodyPai.removeChild(divContainer);
}

// chamando as funçoes pelo window.onload e setando a ação dos botões.
window.onload = function () {
  criarEstados();
  let buttonEnviar = document.querySelector('.enviar');
  buttonEnviar.addEventListener('click', enviarEventoButton);

  let buttonApagar = document.querySelector('.apagar');
  buttonApagar.addEventListener('click', limparButton)
}