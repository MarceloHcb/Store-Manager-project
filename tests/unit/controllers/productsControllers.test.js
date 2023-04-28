const {expect} = require('chai')
const sinon = require('sinon')
const chai = require('chai')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)
const {productController} = require('../../../src/controllers')
const {productService} = require('../../../src/services')
const { productListMock, oneProductMock } = require('../unitMocks/productMock')

describe('Testes da camada ProductsControllers',  () => {
  describe('Verifica a listagem dos produtos', () => {
    it('Retorna status 200 ao listar todos os produtos', async () => {
      const req= {}
      const res = {}
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'getAllProducts').
        resolves({ type: null, message: productListMock })
      await productController.getAllProducts(req,res)
      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWith(productListMock)
      sinon.restore()
    })
    it('Testa a busca por ID', async() => {
      const res= {}
      const req = {
        params: { id: 2 }
      }
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'getProductById').
        resolves({ type: null, message: productListMock[1] })
      await productController.getProductById(req,res)
      expect(res.status).to.have.been.calledWith(200)
      expect(res.json).to.have.been.calledWith(productListMock[1])
      sinon.restore()      
    })
    describe('Verifica casos de erro', () => {
      it('Retorna status 404 e uma mensagem de erro ao pesquisar com ID de produto inexistente', async() => {
      const res= {}
      const req = {
        params: { id: 235 }
      }
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, 'getProductById').
        resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' })
      await productController.getProductById(req,res)
      expect(res.status).to.have.been.calledWith(404)
      expect(res.json).to.have.been.calledWith({ message: 'Product not found' } )
      sinon.restore()      
      })
    })
  }) 
})