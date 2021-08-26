let a = 90;
let b = -45;
let c = 90;

let soma = (a + b + c)

if(soma == 180 && a > 0 && b > 0 && c > 0){
  console.log("Triângulo");
}else {
  console.log("Não é um triangulo")
}

/*
// Gabarito

let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}
*/