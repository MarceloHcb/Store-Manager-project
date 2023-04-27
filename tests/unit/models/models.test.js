const {expect} = require('chai')
const sinon = require('sinon')
const {productModel} = require('../../../src/models')
const connection = require('../../../src/models/connection')
const { productListMock, newProductMock } = require('../unitMocks/productMock')

describe('Testes da camada Models',  () => {
  describe('Verifica a listagem dos produtos', () => {
    it('Testa o recebimento de um array de produtos', async() => {
      sinon.stub(connection, 'execute').resolves([productListMock])
      const result = await productModel.getAllProducts()
      expect(result).to.be.a('array')
      expect(result).to.be.equal(productListMock)
      expect(result).to.have.length(3)
      sinon.restore();
    })
    it('Testa o recebimento de um produto efetuando a busca por seu ID', async() => {
      sinon.stub(connection, 'execute').resolves([productListMock])
      const result = await productModel.getProductById(1)          
      expect(result).to.be.deep.equal(productListMock[0])
      sinon.restore();
    })    
  }) 
  describe('Verifica a criação de um novo produto', () => {
    it('Testa se ao criar um produto retorna o valor correto (ID)', async() => {
      sinon.stub(connection,'execute').resolves([{ insertId: 50 }])
      const result = await productModel.registerNewProduct(newProductMock)      
      expect(result).to.equal(50);      
    })
  })
})