const rescue = require('express-rescue');
const servicesCEP = require('../services/cep');

const findAddressByCEP = rescue(async (req, res, next) => {
  const { cep } = req.params;
  const address = await servicesCEP.findAddressByCEP(cep);

  if (address.error) {
    return next(address.error);
  }

  return res.status(200).json(address);

});

module.exports = { findAddressByCEP };