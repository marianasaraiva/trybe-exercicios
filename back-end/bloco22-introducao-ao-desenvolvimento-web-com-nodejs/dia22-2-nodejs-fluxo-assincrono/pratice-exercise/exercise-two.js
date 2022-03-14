function mathCount(num1, num2, num3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') reject(new Error("Informe apenas números"));

    const resultado = ((num1 + num2) * num3);
    if (resultado <= 50) resolve ("Valor muito baixo");
    resolve(resultado)
  });

  return promise;
}

const numberRandom = () =>  Math.floor(Math.random() * 100 + 1);

function callDoMath() {
  const randomNumbers = Array.from({ length: 3 }).map(numberRandom);
  // console.log(randomNumbers)
  // cria um array com três elementos definidos como undefined, e ao colocar o .map(numberRandom) acrescenta os numeros aleatorios gerados.
  // console.log(Array.from({ length: 3}))

  mathCount(...randomNumbers)
    .then(result => console.log(`sucesso1: ${result}`))
    .catch(err => console.log(`erro: ${err.message}`));
}

callDoMath();