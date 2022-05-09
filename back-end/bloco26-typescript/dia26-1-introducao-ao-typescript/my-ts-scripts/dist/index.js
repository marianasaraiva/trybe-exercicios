"use strict";
// type character = {
//   nickname: string,
//   class: string,
//   stats: {agi: number, str: number, int: number, hp: number, mp: number},
//   createdAt: Date,
// };
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const meses_1 = require("./meses");
const estacoes_1 = require("./estacoes");
const nomesMeses = Object.values(meses_1.meses);
const choiceMonth = readline_sync_1.default.keyInSelect(nomesMeses, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const estacoesSouth = {
    [estacoes_1.estacoes.OUTONO]: [meses_1.meses.MARCO, meses_1.meses.ABRIL, meses_1.meses.MAIO, meses_1.meses.JUNHO],
    [estacoes_1.estacoes.INVERNO]: [meses_1.meses.JUNHO, meses_1.meses.JULHO, meses_1.meses.AGOSTO, meses_1.meses.SETEMBRO],
    [estacoes_1.estacoes.PRIMAVERA]: [meses_1.meses.SETEMBRO, meses_1.meses.OUTUBRO, meses_1.meses.NOVEMBRO, meses_1.meses.DEZEMBRO],
    [estacoes_1.estacoes.VERAO]: [meses_1.meses.DEZEMBRO, meses_1.meses.JANEIRO, meses_1.meses.FEVEREIRO, meses_1.meses.MARCO],
};
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
const estacoesNorth = {
    [estacoes_1.estacoes.PRIMAVERA]: estacoesSouth[estacoes_1.estacoes.OUTONO],
    [estacoes_1.estacoes.VERAO]: estacoesSouth[estacoes_1.estacoes.INVERNO],
    [estacoes_1.estacoes.OUTONO]: estacoesSouth[estacoes_1.estacoes.PRIMAVERA],
    [estacoes_1.estacoes.INVERNO]: estacoesSouth[estacoes_1.estacoes.VERAO],
};
const hemispheres = {
    "Norte": estacoesNorth,
    "Sul": estacoesSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const month = Object.values(meses_1.meses)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereestacoes = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereestacoes).map((entry) => {
    const estacoes = entry[0];
    const meses = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (meses.includes(month))
        console.log(estacoes);
});
