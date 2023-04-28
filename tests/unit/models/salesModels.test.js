const {expect} = require('chai')
const sinon = require('sinon')
const {salesModel} = require('../../../src/models')
const connection = require('../../../src/models/connection')
const { } = require('../unitMocks/productMock')

describe('Testes da camada SalesModels',  () => {
  describe('Verifica a listagem dos produtos', () => {
    // it('Testa o recebimento de um array de produtos', async() => {
    //   sinon.stub(connection, 'execute').resolves([productListMock])
    //   const result = await productModel.getAllProducts()
    //   expect(result).to.be.a('array')
    //   expect(result).to.be.equal(productListMock)
    //   expect(result).to.have.length(3)
    //   sinon.restore();
    // })
    it('Testa o cadastro de Vendas', async() => {
      // sinon.stub(connection, 'execute').resolves([])
      // const result = await salesModel.registerSale()          
      // expect(result).to.be.deep.equal()
      // sinon.restore();
    })    
  }) 
  describe('Verifica casos de Erros', () => {
  
  })
})