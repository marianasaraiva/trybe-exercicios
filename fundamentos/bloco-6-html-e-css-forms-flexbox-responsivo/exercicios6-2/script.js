function criarEstados() {
  let estadosSelect = document.querySelector('#estado');
  let estadosBrasil = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < estadosBrasil.length; index += 1) {
    let estadosOption = document.createElement('option');
    estadosSelect.appendChild(estadosOption).innerText = estadosBrasil[index];
    estadosSelect.appendChild(estadosOption).value = estadosBrasil[index];
  }
}
criarEstados();

// Validando data com Biblioteca Pikaday
let picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(day, month, year);
  }
});

// Validando formulário com a biblioteca Just-Validate
new window.JustValidate('.js-form-1', {
  rules: {
      nome:{
          required: true,
      },
      cpf:{
        required: true,
      },
      endereco:{
        required: true,
      },
      cidade:{
        required: true,
      },
      email: {
          required: true,
          email: true,
          remote: {
              url: 'https://just-validate-api.herokuapp.com/check-correct',
              sendParam: 'email',
              successAnswer: 'OK',
              method: 'GET'
          }
      },
      login: {
          remote: {
              url: 'https://just-validate-api.herokuapp.com/check-correct',
              sendParam: 'login',
              successAnswer: 'OK',
              method: 'GET'
          }
      }
  },
  messages: {
      email: {
          remote: 'Email already exist',
          email: 'Email not valid!'
      },
      login: {
          remote: 'Login already exist',
          required: 'Login is required!'
      }
  },
});
