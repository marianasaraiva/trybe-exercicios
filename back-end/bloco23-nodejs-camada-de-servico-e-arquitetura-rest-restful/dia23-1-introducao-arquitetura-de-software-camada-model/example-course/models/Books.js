const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

// Busca todos os livros do banco.
const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;',
  );
  return books.map(serialize);
};

module.exports = {
  getAll,
};  