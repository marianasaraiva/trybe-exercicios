const modelsCEP = require('../models/cep');

const regexValidCEP = /\d{5}-\d{3}/;

const getAddress = async () => {
  const address = await modelsCEP.getAddress();
  console.log('entrou no get services')
  if (!address) {
    return {
      error: {
        code: "invalidRequire",
        message: "Require GET not found" }
    }
  }

  return address;
}

const findAddressByCEP = async (cepSearch) => {
  if (!regexValidCEP.test(cepSearch)) {
    return {
      error: {
        code: "invalidData",
        message: "CEP inválido" }
    }
  }

  const cep = await modelsCEP.findAddressByCEP(cepSearch);
  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      }
    }
  }

  return cep;
}

const createAddress = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const cadastro = await modelsCEP.createNewAddress({ cep, logradouro, bairro, localidade, uf });
  if(!cadastro) {
    return {
      error: {
        code: 'notFound',
        message: 'Cadastro não realizado'
      }
    }
  }

  return cadastro;
}

module.exports = { findAddressByCEP, createAddress, getAddress };