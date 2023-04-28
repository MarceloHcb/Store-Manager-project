const {expect} = require('chai')
const sinon = require('sinon')
const {salesModel} = require('../../../src/models')
const connection = require('../../../src/models/connection')
const { salesListMock, newSaleMock, returnedRegisterSaleMock } = require('../unitMocks/productMock')

describe('Testes da camada Sales Models',  () => {
  describe('Verifica a listagem de vendas', () => {
    it('Testa a listagem de um array de vendas', async() => {
      sinon.stub(connection, 'execute').resolves([salesListMock])
      const result = await salesModel.getAllSales()
      expect(result).to.be.a('array')
      expect(result).to.be.equal(salesListMock)
      expect(result).to.have.length(3)
      sinon.restore();
    })
    it('Testa a listagem pelo ID da venda', async() => {
      sinon.stub(connection, 'execute').resolves([salesListMock])
      const [result] = await salesModel.getSaleById(1)
      console.log(result);
      expect(result).to.be.deep.equal(salesListMock[0])
      sinon.restore();
    })
    it('Testa o cadastro de uma venda', async() => {
      sinon.stub(connection, 'execute').resolves([salesListMock])
      const result = await salesModel.registerSale([...newSaleMock])
      result.id = 4      
      expect(result).to.be.a('object')
      expect(result).to.be.deep.equal(returnedRegisterSaleMock)
      sinon.restore();
    })    
  }) 
  // describe('Verifica casos de Erros', () => {
  
  // })
})