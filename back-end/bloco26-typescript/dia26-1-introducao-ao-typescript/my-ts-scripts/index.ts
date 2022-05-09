// // exercise 1 to 3

// type character = {
//   nickname: string,
//   class: string,
//   stats: {agi: number, str: number, int: number, hp: number, mp: number},
//   createdAt: Date,
// };

// const characters: character[] = [
//   {
//     nickname: 'xKillerx',
//     class: 'warrior',
//     stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
//     createdAt: new Date('2003-10-1')
//   },
//   {
//     nickname: 'jainaProud',
//     class: 'mage',
//     stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
//     createdAt: new Date('2003-10-2')
//   },
//   {
//     nickname: 'catIn',
//     class: 'hunter',
//     stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
//     createdAt: new Date('2003-10-15')
//   },
// ]

// function printCharacter(character: any, index: number) {
//   const { nickname, class: cls, createdAt } = character;

//   console.log(`\n\n===== Character: ${index + 1} ========`);
//   console.log(`nickname: ${nickname}
// class: ${cls}
// createdAt: ${createdAt}`);
// }

// characters.forEach(printCharacter);



// // *********************************************************************************************
// // exercise 4

// import { exit } from "process";
// import readline from "readline-sync";
// import { meses } from "./meses";
// import { estacoes } from "./estacoes";

// const nomesMeses = Object.values(meses);

// const choiceMonth = readline.keyInSelect(nomesMeses, "Escolha um mês do ano");
// // O método .keyInSelect mostra uma interface
// // de escolha para a pessoa usuária

// const estacoesSouth = {
//     [estacoes.OUTONO]: [meses.MARCO, meses.ABRIL, meses.MAIO, meses.JUNHO],
//     [estacoes.INVERNO]: [meses.JUNHO, meses.JULHO, meses.AGOSTO, meses.SETEMBRO],
//     [estacoes.PRIMAVERA]: [meses.SETEMBRO, meses.OUTUBRO, meses.NOVEMBRO, meses.DEZEMBRO],
//     [estacoes.VERAO]: [meses.DEZEMBRO, meses.JANEIRO, meses.FEVEREIRO, meses.MARCO],
// }
// // Criamos um objeto onde suas chaves são as estações
// // e seus valores são os meses. Note abaixo um segundo
// // objeto onde, sendo do hemisfério oposto, as estações
// // são opostas também

// const estacoesNorth = {
//     [estacoes.PRIMAVERA]: estacoesSouth[estacoes.OUTONO],
//     [estacoes.VERAO]: estacoesSouth[estacoes.INVERNO],
//     [estacoes.OUTONO]: estacoesSouth[estacoes.PRIMAVERA],
//     [estacoes.INVERNO]: estacoesSouth[estacoes.VERAO],
// }

// const hemispheres = {
//     "Norte": estacoesNorth,
//     "Sul": estacoesSouth
// }

// const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// // O método .keyInSelect mostra uma interface
// // de escolha para a pessoa usuária

// const month = Object.values(meses)[choiceMonth];

// const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

// console.log(`Mês: \n${month}`);
// console.log(`Hemisfério: \n${hemisphere}`);
// console.log(`Estações:`);
// const chosenHemisphereestacoes = Object.values(hemispheres)[choiceHemisphere];
// Object.entries(chosenHemisphereestacoes).map((entry) => {
//     const estacoes = entry[0];
//     const meses = entry[1];
//     // São os meses de cada estação. Caso esteja
//     // incluído em mais de uma estação, o console
//     // abaixo irá adicionar

//     if (meses.includes(month)) console.log(estacoes);
// });


// // *********************************************************************************************
// exercise 5 to 11

import readline from "readline-sync"; // importamos o pacote readline-sync

// criamos um array de objetos com o nome do script e o caminho do script a ser executado
const scripts = [
    { name: "Converter comprimento", script: "./length" },
    { name: "Converter massa", script: "./mass" },
    { name: "Converter capacidade", script: "./capacity" },
    { name: "Converter área", script: "./area" },
    { name: "Converter volume", script: "./volume" }
];

// criamos um novo array somente com os nomes dos scripts
const scriptNames = scripts.map(item => item.name);

// pedimos à pessoa usuária para escolher um dos scripts de conversão
const choice = readline.keyInSelect(scriptNames, "Escolha um número para executar o script de conversão de unidade");

require(scripts[choice].script); // executamos o script escolhido usando o require