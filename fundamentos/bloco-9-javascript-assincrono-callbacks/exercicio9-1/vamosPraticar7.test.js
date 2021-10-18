const uppercase = require('./vamosPraticar7.js');

test('Testar a string acima', (done) => {
  uppercase('grupo de estudos', (str) => {
    try {
      expect(str).toBe('GRUPO DE ESTUDOS')
      done();
    } catch(error) {
      done(error);
    }
  });
});
