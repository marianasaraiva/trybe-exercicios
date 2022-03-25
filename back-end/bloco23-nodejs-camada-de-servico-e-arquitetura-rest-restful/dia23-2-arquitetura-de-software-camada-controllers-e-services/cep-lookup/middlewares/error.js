const middlewareError = (err, req, res, next) => {
  console.error(err.message);
  return res.status(500).json({ message: 'Erro interno - middleware de erro geral'})
}

module.exports = middlewareError;