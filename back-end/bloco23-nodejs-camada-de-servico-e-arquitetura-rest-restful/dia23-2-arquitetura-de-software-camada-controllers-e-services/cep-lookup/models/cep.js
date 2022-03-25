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

const getAddress = async () => {
  const query = 'SELECT * FROM cep_lookup .ceps';
  const [ result ] = await connection.execute(query);
  console.log(result);
  return result;
}

const findAddressByCEP = async (cepSearch) => {
  const formatCEPWithoutSimbols = cepSearch.replace('-', '');
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup .ceps WHERE = ?';
  const [ result ] = await connection.execute(query, [formatCEPWithoutSimbols]);
  // if (result.length === 0) return null;
  // if (!result) return null;
  return findNewCEP(result);
};

const createNewAddress = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query = `INSERT INTO cep_lookup .ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)`
  const [ result ] = await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
  // if (result.length === 0) return null;
  // if (!result) return null;
  // console.log(result)
  return { id: result.insertId, cep, logradouro, bairro, localidade, uf };
}

module.exports = { findAddressByCEP, createNewAddress, getAddress };