const express = require('express');
const router = express.Router();
const controllerCEP = require('../controllers/cep');

router.get('/', (req, res) => {
  const message = { message: 'Rota message OK!'}
  return res.status(200).json(message);
});

router.get('/:cep', controllerCEP.findAddressByCEP);

module.exports = router;