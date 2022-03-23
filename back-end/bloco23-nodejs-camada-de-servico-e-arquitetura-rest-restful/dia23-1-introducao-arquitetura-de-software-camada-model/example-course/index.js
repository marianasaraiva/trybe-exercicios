const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

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

app.post('/books/', async (req, res) => {
  const { title, author_id } = req.body;

  if (!Books.isValid(title, author_id)) return res.status(400).json({ message: 'Dados inválidos' });

  await Books.create(title, author_id);
  res.status(201).json({ message: 'Livro criado com sucesso! '});
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});