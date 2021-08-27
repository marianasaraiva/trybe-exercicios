/*
1 - A classificação do Índice de Massa Corporal (IMC), pode ajudar a identificar obesidade ou desnutrição em crianças, adolescentes, adultos e idosos.
O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: IMC = peso/ (altura x altura), devendo o peso estar em kg e a altura em metro, e o resultado é dado em kg/m2. Depois de obter o resultado, é verificado em que faixa o resultado se encontra, podendo indicar:
Magreza, quando o resultado é menor que 18,5 kg/m2;
Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
Obesidade, quando o resultado é maior que 30 kg/m2.
Crie um programa para calcular o IMC e exibir a faixa do resultado.
O IMC precisa ter 1 casa decimal depois da vírgula;
Exiba os resultados da seguinte forma:
Seu IMC é: 23.7 kg/m2
Resultado: Normal
*/

let peso = 55;
let alturaMetro= 1.55;
let alturaCentimetro = alturaMetro * 100;
let imcBruto = peso /alturaMetro / alturaMetro;

let imc = Math.round(imcBruto * 10) / 10;

if (imc < 18.5){
  console.log("Magreza")
}else if(imc <= 24.9){
  console.log("Classificação: Normal. IMC = " + imc + " Kg/m2")
}else if(imc <= 30){
  console.log("Classificação: Sobrepeso. IMC = " + imc + " Kg/m2")
}else{
  console.log("Classificação: Obesidade. IMC = " + imc + " Kg/m2")
}


/*_______________________________________________________________________________________________
2- Faça um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
A soma de 1 a 1000 é: X.
*/

let soma = [];
let resultado = 0;
for (let index = 1; index <= 1000; index += 1){
  resultado += soma.push(index);
 }

console.log(resultado);


/*________________________________________________________________________________________________
3 - Elabore uma função que receba 2 parâmetros (um array e um elemento que está contido no array) e retorne a posição em que o elemento se encontra no array. Caso não encontre o elemento, retorne uma mensagem de erro.
*/
