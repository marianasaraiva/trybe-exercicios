const express = require('express');
const router = express.Router();
const rescue = require('express-rescue');

router.get('/', (req, res) => {
  const message = { "message": "pong!" }
  return res.status(200).json(message)
});
  
module.exports = router;