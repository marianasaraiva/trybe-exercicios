const rescue = require('express-rescue');
const servicesCEP = require('../services/cep');

const getAddress = rescue(async (req, res, _next) => {
  const address = await servicesCEP.getAddress();
  console.log('Controllers')
  return res.status(200).json(address);
});

const findAddressByCEP = rescue(async (req, res, next) => {
  const { cep } = req.params;
  const address = await servicesCEP.findAddressByCEP(cep);

  if (address.error) {
    return next(address.error);
  }

  return res.status(200).json(address);

});

// const { cep } = req.params;
//   const address = await services.findByCep(cep)
//   if (address.error) {
//     return res.status(404).json(address.error);
//   }
//   return res.status(200).send(address)

const createAddressNew = rescue(async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const newAddress = await servicesCEP.createAddress({ cep, logradouro, bairro, localidade, uf });

  if (newAddress.error) {
    return next(newAddress.error);
  }

  return res.status(200).json(newAddress);
});

module.exports = { findAddressByCEP, createAddressNew , getAddress};