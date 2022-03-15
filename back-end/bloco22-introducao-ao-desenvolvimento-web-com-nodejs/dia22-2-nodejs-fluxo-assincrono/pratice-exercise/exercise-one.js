function mathCount(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') reject(new Error("Informe apenas números"));

    const resultado = ((num1 + num2) * num3);
    if (resultado <= 50) resolve ("Valor muito baixo");
    resolve(resultado)
  });

  return promise;
}

mathCount('r', 8, 7)
  .then(result => console.log(`sucesso1: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

  mathCount(3, 8, 7)
  .then(result => console.log(`sucesso2: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

mathCount(1, 2, 7)
  .then(result => console.log(`sucesso3: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));