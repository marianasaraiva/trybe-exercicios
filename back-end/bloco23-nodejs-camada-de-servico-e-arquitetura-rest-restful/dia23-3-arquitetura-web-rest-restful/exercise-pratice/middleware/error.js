module.exports = (err, req, res, next) => {
  return res.status(500).json({ message: 'Erro na aplicação!'});
}