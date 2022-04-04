const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
}); 

describe('busca um filme no banco de dados pelo id', () => {

  describe('quando não existe um filme com o id informado', () => {
    before(async () => {
      const execute = [[], []];
      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async () => {
      connection.execute.restore();
    })

    it('retorna null', async () => {
      const response = await MoviesModel.getById();
      expect(response).to.be.equal(null);
    });
  }); 

  describe('quando existe um filme com o id informado', () => {

    before(() => {
      sinon.stub(Movies, 'getById').resolves(
        {
          id: 1,
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        }
      );
    });

    after(() => {
      MoviesModel.getById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesModel.getById(1);
      expect(response).to.be.an('object');
    });

    it('o objeto não está vazio', async () => {
      const response = await MoviesModel.getById(1);
      expect(response).to.be.not.empty;
    });

    it('verifica se o objeto tem as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const item = await MoviesModel.getById(1);
      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
    })
  });
});
