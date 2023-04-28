const {expect} = require('chai')
const sinon = require('sinon')
const {salesModel} = require('../../../src/models')
const { salesListMock, newSaleMock, returnedRegisterSaleMock, returnedByIdSaleMock } = require('../unitMocks/productMock')
const { salesService } = require('../../../src/services')

describe('Testes da camada Sales Services',  () => {
  describe('Verifica a listagem de vendas', () => {
    it('Testa a listagem de um array de vendas', async() => {
      sinon.stub(salesModel, 'getAllSales').resolves(salesListMock)
      const result = await salesService.getAllSales()
      expect(result.type).to.be.equal(null)
      expect(result.message).to.deep.equal(salesListMock)
      sinon.restore();
    })
    it('Testa a listagem pelo ID da venda', async() => {
      sinon.stub(salesModel, 'getAllSales').resolves(salesListMock)
      sinon.stub(salesModel, 'getSaleById').resolves(returnedByIdSaleMock)
      const result = await salesService.getSaleById(2)          
      expect(result.type).to.be.null
      expect(result.message).to.deep.equal(returnedByIdSaleMock)
      sinon.restore()
    })

    it('Testa o cadastro de uma venda', async() => {
      sinon.stub(salesModel, 'getAllSales').resolves(salesListMock)
      const result = await salesService.registerSale(newSaleMock)  
      result.message.id = 4
      expect(result.type).to.be.equal(null)      
      expect(result.message).to.be.deep.equal(returnedRegisterSaleMock)
      sinon.restore();
    })    
  }) 
  // describe('Verifica casos de Erros', () => {
  
  // })
})