const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const message = { message: 'Rota message OK!'}
  return res.status(200).json(message);
});

router.get('/:id', (req, res) => {
  
});

module.exports = router;