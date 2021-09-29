const { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate } = require("./sum");

describe('Testar a função sum', () => {
  it('deve retornar o reultado da soma', () => {
    // Teste se o retorno de sum(4, 5) é 9
    expect(sum(4, 5)).toEqual(9);
    // Teste se o retorno de sum(0, 0) é 0
    expect(sum(0, 0)).toEqual(0);
  });
  it('deve disparar um erro caso receba uma string', () => {
    // Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
    expect(() => sum(4,'5')).toThrowError();
    // Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})

// 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
describe('Testar a função myRemove', () => {
  it('Deve retornar o resultado do array [ 1, 2, 4 ]', () => {
    // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Não deve retornar o resultado do array [1, 2, 3, 4]', () => {
    // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });  
  it('Retornar o array se o item não estiver contido  no array [1, 2, 3, 4]', () => {
    // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
describe('Testar a função myFizzBuzz', () => {
  it('Deve retornar fizzbuzz se divisivel por 5 e 3', () => {
    // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  it('Deve retornar buzz se divisivel por 5', () => {
    // Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
    expect(myFizzBuzz(10)).toEqual('buzz');
  });  
  it('Deve retornar fizz se divisivel por 3', () => {
    // Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
    expect(myFizzBuzz(9)).toEqual('fizz');
  });
  it('Deve retornar o número informado se não for divisivel por 3 e 5', () => {
    // Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
    expect(myFizzBuzz(14)).toEqual(14);
  });
  it('Deve retornar falso se não for number', () => {
    // Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
    expect(myFizzBuzz('m')).toEqual(false);
  });
})

// No Bloco 4 você desenvolveu um projeto para testar os seus conhecimentos em Javascript e lógica de programação: o Playground functions . Nos exercícios a seguir, você irá trabalhar com os testes para algumas funções que você criou! Aproveite para refatorá-las e usar todos os recursos que já aprendemos até aqui, como as Higher Order Functions e as features do Javascript ES6.
// Para as funções encode e decode crie os seguintes testes em Jest:
describe('Testar a função encode e decode', () => {
  // verifica se a funcao esta definida
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('Verifica se encode é função', () => {
    // Teste se encode e decode são funções;
    expect(typeof encode).toEqual('function');
  });
  it('Verifica se decode é função', () => {
    expect(typeof decode).toEqual('function');
  });  
  it('Realizar troca de teste vogais a, e, i, o, u para 1, 2, 3, 4, 5', () => {
    // Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente.
    expect(encode('Be Trybe')).toEqual('B2 Tryb2');
  });
  it('Realizar troca de teste vogais 1, 2, 3, 4, 5 para a, e, i, o, u', () => {
    // Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente
    expect(decode('B2 Tryb2')).toEqual('Be Trybe');
  });
  it('Realizar troca de vogais por números', () => {
    // Teste se as demais letras/números não são convertidos para cada caso
    expect(encode('b,c,d,f,g')).toEqual('b,c,d,f,g');
  });
  // Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
  it('Checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('Mariana').length).toEqual(7);;
  });
})

//  A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});


describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});