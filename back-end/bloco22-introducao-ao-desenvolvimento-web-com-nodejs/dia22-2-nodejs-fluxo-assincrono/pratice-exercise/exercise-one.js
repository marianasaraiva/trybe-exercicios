function mathCount(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' && typeof num2 !== 'number' && typeof num3 !== 'number') reject(new Error("Informe apenas números"));

    const resultado = ((num1 + num2) * num3);
    if (resultado <= 50) resolve ("Valor muito baixo");
    resolve(resultado)
  });

  return promise;
}

mathCount(2, 8, 7)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));