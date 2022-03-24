const express = require('express');
const rescue = require('express-rescue');
const { createUser } = require('../models/createUser');

const router = express.Router();

router.post('/', rescue(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const create = await createUser({ firstName, lastName, email, password })

  if (!firstName || !lastName || !email) {
    return res.status(404).json({ "message": 'O campo precisa ser válido' });
  }

  if (!password || password.length < 6) {
    return res.status(404).json({ "message": 'O campo "password" deve ter pelo menos 6 caracteres' });
  }

  return res.status(200).json(create);


}));

module.exports = router;