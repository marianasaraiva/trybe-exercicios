const connection = require('./connection');

const regexValidCEP = /\d{5}-\d{3}/;

const formatCEP = (cep) => {
  if(regexValidCEP.test(cep)) return cep;
  return cep.replace(/\d{5}-\d{3}/, '$1-$2');
};

const findNewCEP = ({ cep, logradouro, bairro, localidade, uf }) => {
  return {
    cep: formatCEP(cep),
    logradouro,
    bairro,
    localidade,
    uf,
  }
};

const findAddressByCEP = async (cepSearch) => {
  const formatCEPWithoutSimbols = cepSearch.replace('-', '');
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE = ?';
  const [ result ] = await connection.execute(query, [formatCEPWithoutSimbols]);
  if (result.length === 0) return null;
  if (!result) return null;
  return findNewCEP(result);
};

module.exports = { findAddressByCEP };