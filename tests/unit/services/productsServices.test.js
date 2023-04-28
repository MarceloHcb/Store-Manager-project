const {expect} = require('chai')
const sinon = require('sinon')

const {productModel} = require('../../../src/models')
const {productService} = require('../../../src/services')
const { productListMock } = require('../unitMocks/productMock')


describe('Testes da camada ProductsServices',  () => {
  describe('Verifica a listagem dos produtos', () => {
    it('Testa o recebimento de um array de produtos', async() => {
      sinon.stub(productModel, 'getAllProducts').resolves(productListMock)
      const result = await productService.getAllProducts()
      expect(result.type).to.be.equal(null)
      expect(result.message).to.deep.equal(productListMock)
      sinon.restore();
    })
    it('Testa a busca por ID', async() => {
      sinon.stub(productModel, 'getAllProducts').resolves(productListMock)
      const result = await productService.getProductById(2)
      expect(result.type).to.be.equal(null)
      expect(result.message).to.deep.equal(productListMock[1])
      sinon.restore()
    })
    describe('Verifica casos de erro', () => {
      it('Retorna um erro ao pesquisar com ID de produto inexistente', async() => {
      sinon.stub(productModel, 'getAllProducts').resolves(productListMock)
      const result = await productService.getProductById(232)
      expect(result.type).to.be.equal('PRODUCT_NOT_FOUND')
      expect(result.message).to.deep.equal('Product not found')
      sinon.restore()
      })
    })
  }) 
})