const express = require('express');

const app = express();

const Author = require('./models/Author');
const Books = require('./models/Books');  

const PORT = process.env.PORT || 3001;

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Books.findById(id);
  
  if (!books) return res.status(404).json({ message: 'Not found'});

  res.status(200).json(books);

});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});