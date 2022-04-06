const express = require('express');
const BookController = require('../controllers/bookControllers');
const router = express.Router();

router.get('/books', BookController.findAllBook );
router.get('/book/:id', BookController.findBookById );
router.post('/book', BookController.createBook );
router.post('/book/:id', BookController.updateBook);
router.delete('/book/:id', BookController.deleteBook);

module.exports= router;
