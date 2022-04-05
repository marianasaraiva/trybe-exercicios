const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const book = await Book.findAll();

    return res.status(200).json(book);
  } catch (error) {
    console.log(err.message);
    res.status(500).json({ message: "Deu ruim!!!" });
  }
})

module.exports= router;

// router.get('/books', (req, res) => {
//   Book.findAll().then(dados => {
//     res.status(200).json(dados);
//   }).catch(err => {
//     console.log(err.message);
//     res.status(500).json({ message: "Deu ruim!!!"});
//   })
// });