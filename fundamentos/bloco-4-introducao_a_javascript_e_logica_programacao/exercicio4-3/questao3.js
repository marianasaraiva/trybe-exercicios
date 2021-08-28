/*
Agora inverta o lado do triângulo. Por exemplo:
n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

*/

let n = 5;
let asteriscos = "*";
let linha= "";
let espaco = " ";
let linhaEspaco = "";

for (let index = 1; index <= n ; index += 1) {
  linha = linha + asteriscos;
  linhaEspaco = "";

  for(let index2 = (n - index); index2 >= 1; index2 -= 1){
    linhaEspaco = linhaEspaco + espaco;
  }
  console.log(linhaEspaco + linha);
}
  
