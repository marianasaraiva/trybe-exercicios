const express = require('express');
const router = express.Router();
const controllerCEP = require('../controllers/cep');

router.get('/', controllerCEP.getAddress);

router.get('/:cep', controllerCEP.findAddressByCEP);

router.post('/', controllerCEP.createAddressNew);

module.exports = router;