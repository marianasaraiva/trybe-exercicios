const service = require('./service');
jest.mock('./service');

afterEach(() => jest.clearAllMocks());

describe('Exercicio 1', () => {
  test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    service.numberRandom = jest.fn().mockReturnValue(10);

    expect(service.numberRandom()).toBe(10);
    expect(service.numberRandom).toHaveBeenCalled();
    expect(service.numberRandom).toBeCalledTimes(1);
  })
});

describe('Exercicio 2', () => {
  test('Teste se a função foi chamada e a nova implementação de divisão foi aplicada, e verifique se a aplicação da nova implementação acontece apenas uma vez.', () => {
    service.numberRandom = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(service.numberRandom(8, 2)).toBe(4);
    expect(service.numberRandom).toHaveBeenCalled();
    expect(service.numberRandom).toHaveBeenCalledTimes(1);
    expect(service.numberRandom).toHaveBeenCalledWith(8, 2);
  });
});


describe('Exercicio 3', () => {
  test('Exercicio 3 - Parte 1: Realize os testes que achar necessário.', () => {
    service.numberRandom = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.numberRandom(8, 2, 2)).toBe(32);
    expect(service.numberRandom).toHaveBeenCalled();
    expect(service.numberRandom).toHaveBeenCalledTimes(1);
    expect(service.numberRandom).toHaveBeenCalledWith(8, 2, 2);
  });

  test('Exercicio 3 - Parte 2 com reset: Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobr', () => {
    service.numberRandom.mockRestore();
    expect(service.numberRandom).toHaveBeenCalledTimes(0);

    service.numberRandom.mockImplementationOnce((a) => a * 2);

    expect(service.numberRandom(8)).toBe(16);
    expect(service.numberRandom).toHaveBeenCalled();
    expect(service.numberRandom).toHaveBeenCalledTimes(1);
    expect(service.numberRandom).toHaveBeenCalledWith(8);
  });

});

describe('Exercicio 4', () => {
  test('Parte 1: mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    // No course explica que precisa usar o SpyOn para esetar/restaurar, mas não consegui implementar.
    service.upperCaseString = jest.fn().mockImplementation((a) => a.toLowerCase());

    expect(service.upperCaseString('UPPERCASE')).toBe('uppercase');
    expect(service.upperCaseString).toHaveBeenCalled();
    expect(service.upperCaseString).toHaveBeenCalledTimes(1);
    expect(service.upperCaseString).toHaveBeenCalledWith('UPPERCASE');

    service.upperCaseString.mockRestore();

    expect(service.upperCaseString('lowercase')).toBe(undefined);
  });


  // test('Parte 1: mockando função para receber um parâmetro e retornar em caixa baixa', () => {
  //   const mockCorreta = jest
  //     .spyOn(service, 'upperCaseString')
  //     .mockImplementation((a) => a.toLowerCase());
  //   // service.upperCaseString = jest.fn().mockImplementation((a) => a.toLowerCase());

  //   service.upperCaseString('UPPERCASE');
  //   expect(mockCorreta).toHaveBeenCalledTimes(1);
  //   expect(mockCorreta('UPPERCASE')).toBe('uppercase');
  //   expect(mockCorreta).toHaveBeenCalledTimes(2);
  //   expect(mockCorreta).toHaveBeenLastCalledWith('UPPERCASE');

  //   service.upperCaseString.mockRestore();

  //   expect(service.upperCaseString('uppercase')).resolves.toBe('UPPERCASE');
  // });

  test('Parte 2: mockando função para receber um parâmetro e retornar a última letra de uma string', () => {
    // No course explica que precisa usar o SpyOn para resetar/Restaurar , mas não consegui implementar.
    service.firstLetter = jest.fn().mockImplementation((a) => a[a.length -1]);

    expect(service.firstLetter('delicia')).toBe('a');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith('delicia');

    service.firstLetter.mockRestore();

    // expect(service.firstLetter('delicia')).toBe('d');
    expect(service.firstLetter('delicia')).toBe(undefined);
  });

  test('Parte 3: mockando função para receber três strings e concatená-las.', () => {
    // No course explica que precisa usar o SpyOn para fazer isso, mas não consegui implementar.
    service.stringsConcat = jest.fn().mockImplementation((a, b, c) => a + b + c);

    expect(service.stringsConcat('de', 'li', 'cia')).toBe('delicia');
    expect(service.stringsConcat).toHaveBeenCalled();
    expect(service.stringsConcat).toHaveBeenCalledTimes(1);
    expect(service.stringsConcat).toHaveBeenCalledWith('de', 'li', 'cia');

    service.stringsConcat.mockRestore();

    expect(service.stringsConcat('de', 'li', 'cia')).toBe(undefined);
    // expect(service.stringsConcat('de', 'li', 'cia')).toBe('delicia');
  });
});

describe('Exercicio 5', () => {
  test('Mocke a requisição para testar requisição com a Promise resolvida', async () => {
    service.fetchAPI = jest.fn().mockResolvedValue('request sucess');

    service.fetchAPI();
    expect(service.fetchAPI).toHaveBeenCalled();
    expect(service.fetchAPI).toHaveBeenCalledTimes(1);
    await expect(service.fetchAPI()).resolves.toBe('request sucess');
    expect(service.fetchAPI).toHaveBeenCalledTimes(2);
  });

  test('Mocke a requisição para testar requisição com a Promise rejeitada', async () => {
    service.fetchAPI = jest.fn().mockRejectedValue('request failed');

    expect(service.fetchAPI).toHaveBeenCalledTimes(0);
    await expect(service.fetchAPI()).rejects.toBe('request failed');
    expect(service.fetchAPI).toHaveBeenCalledTimes(1);
  });
});