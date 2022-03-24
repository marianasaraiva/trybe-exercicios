function errorMiddleware(err, req, res, next) {
  console.error(err.message);
  return res.status(500).json({ message: 'Erro interno da aplicação' });
}

module.exports = errorMiddleware;