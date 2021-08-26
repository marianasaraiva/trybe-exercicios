let salarioBruto = 3500;
let salarioLiquido = 0;
var descontoINSS= 0;
var descontoIR = 0;
var aliquota = 0;

//aliquota INSS
if(salarioBruto < 1556.94){
  console.log(descontoINSS = (salarioBruto*8/100));
}else if(salarioBruto >= 1556.94 && salarioBruto < 2594.92){
  console.log(descontoINSS = (salarioBruto*9/100));
}else if(salarioBruto >= 2594.92 && salarioBruto < 5189.82){
  console.log(descontoINSS = (salarioBruto*11/100));
}else{
  console.log(descontoINSS = 570.88);
}

//aliquota IR
if(salarioBruto < 1903.98){
  console.log(descontoIR = 0);
}else if(salarioBruto >= 1903.98 && salarioBruto < 2826.65){
  console.log(descontoIR = ((salarioBruto*7.5/100)+ 142.80));
}else if(salarioBruto >= 2826.66 && salarioBruto < 3751.05){
  console.log(descontoIR = ((salarioBruto*15/100)+ 352.80));
}else if(salarioBruto >= 3751.06 && salarioBruto < 4664.68){
  console.log(descontoIR = ((salarioBruto*22.5/100)+ 636.13));
}else{
  console.log(descontoIR = ((salarioBruto*27.5/100)+ 869.36));
}

console.log(salarioBruto - descontoINSS - descontoIR)

/*

let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));
*/