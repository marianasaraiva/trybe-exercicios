const { expect } = require("chai");
const numeroInformado = require('./exercise');

describe('verifica numero positivo, negativo ou neutro', () => {
  describe('verifica se N > 0', () => {
    it('verifica se é uma string', () => {
      const resposta = numeroInformado(5)
      expect(resposta).to.be.a('string')
    });
    it('verifica se é igual a "positivo"', () => {
      const resposta = numeroInformado(5)
      expect(resposta).to.be.equals('positivo')
    });    
  });

  describe('verifica se N === 0', () => {
    it('verifica se é uma string', () => {
      const resposta = numeroInformado(0)
      expect(resposta).to.be.a('string')
    });
    it('verifica se é igual a "neutro"', () => {
      const resposta = numeroInformado(0)
      expect(resposta).to.be.equals('neutro')
    });    
  });

  describe('verifica se N < 0', () => {
    it('verifica se é uma string', () => {
      const resposta = numeroInformado(-5)
      expect(resposta).to.be.a('string')
    });
    it('verifica se é igual a "negativo"', () => {
      const resposta = numeroInformado(-5)
      expect(resposta).to.be.equals('negativo')
    });    
  });

  describe('quando N não é um "number"', () => {
    it('verifica se é uma string', () => {
      const resposta = numeroInformado('teste')
      expect(resposta).to.be.a('string')
    });
    it('verifica se o N é um number', () => {
      const resposta = numeroInformado('teste')
      expect(resposta).to.be.equals('o valor deve ser um número')
    });    
  });
});

describe('verifica numero positivo, negativo ou neutro', () => {

});
