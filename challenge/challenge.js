const horas = (hour) => {
  if (hour.includes('AM')) {
    return hour.slice(0, 8);
  };

  const numberConvert = Number(hour.slice(0, 2)) + 12;
  const number = Number(hour.slice(0, 2));

  if (numberConvert === 24) {
    return hour.slice(0, 8).replace(number, '00');
  }

  return hour.slice(0, 8).replace(numberConvert, number);
}

console.log("PM", horas('12:01:00PM'))
console.log("AM", horas('07:01:00AM'))
 

function replacer(key, value) {
  if(typeof value === 'string') {
  return undefined;
  }
  return value;
}

var dados = {hora: "22", dia:31, objeto:"teclado", ano:2022};
var resultado = JSON.stringify(dados, replacer);

console.log(resultado)

var a = 1;

(function () {

var a = 2;

})();

console.log(a);