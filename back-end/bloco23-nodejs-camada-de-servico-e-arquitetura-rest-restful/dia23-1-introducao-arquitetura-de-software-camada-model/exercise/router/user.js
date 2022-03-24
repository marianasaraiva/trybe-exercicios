const express = require('express');
const rescue = require('express-rescue');

const { createUser, users, findById, updatedList, deleteById } = require('../models/createUser');

const router = express.Router();

router.post('/', rescue(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(404).json({
      "error": true,
      "message": "O campo precisa ser válido"
    });
  }
  
  if (password.length < 6) {
    return res.status(404).json({
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    });
  }
  
  const create = await createUser({ firstName, lastName, email, password });
  
  return res.status(201).json(create);
}));

router.get('/', rescue(async (req, res, _next) => {
  const {id, firstName, lastName, email } = req.body;
  const result = await users();
  
  if(!result) return res.status(200).json({});
  
  res.status(200).json(result);
}));

router.get('/:id', rescue(async (req, res, _next) => {
  const { id } = req.params;
  
  const result = await findById(id);

  if (!result.length) return res.status(404).json({ message: 'Not Found' })

  return res.status(200).json(result);
}));

router.put('/:id', rescue(async (req, res, _next) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  
  if (!firstName || !lastName || !email || !password) {
    return res.status(404).json({
      "error": true,
      "message": "O campo precisa ser válido"
    });
  }
  
  if (password.length < 6) {
    return res.status(404).json({
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    });
  }
  
  const result = await updatedList(firstName, lastName, email, password, id);

  return res.status(200).json(result);
}));

router.delete('/:id', rescue(async (req, res, _next) => {
  const { id } = req.params;

  await deleteById(id);

  return res.status(200).end();
}));

module.exports = router;