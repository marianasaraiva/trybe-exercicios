const modelsCEP = require('../models/cep');

const regexValidCEP = /\d{5}-\d{3}/;

const findAddressByCEP = async (cepSearch) => {
  if(!regexValidCEP.test(cepSearch)) {
    return {
      error: {
        code: "invalidData",
        message: "CEP inválido" }
    }
  }

  const cep = await modelsCEP.findAddressByCEP(cepSearch);
  if(!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      }
    }
  }

  return cep;
}

module.exports = { findAddressByCEP };