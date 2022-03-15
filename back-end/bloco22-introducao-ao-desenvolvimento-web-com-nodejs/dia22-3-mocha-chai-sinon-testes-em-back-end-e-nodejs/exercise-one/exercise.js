
const numeroInformado = (num) => {
  if (num < 0) return 'negativo';
  if (num === 0) return 'neutro';
  return 'positivo'
}

module.exports = numeroInformado;