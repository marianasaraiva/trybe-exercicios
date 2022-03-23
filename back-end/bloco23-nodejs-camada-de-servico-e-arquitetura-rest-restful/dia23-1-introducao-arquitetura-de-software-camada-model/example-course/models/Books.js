const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

// Busca todos os livros do banco.
const getAll = async () => {
  const query = 'SELECT id, title, author_id FROM model_example.books;'
  const [books] = await connection.execute(query);
  return books.map(serialize);
};

const findById = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE id = ?;'
  const [booksId] = await connection.execute(query, [authorId]);
  const result = await booksId.map(({ id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }));

  if (booksId.length === 0) return null;

  return result;
}

module.exports = {
  getAll,
  findById,
};  