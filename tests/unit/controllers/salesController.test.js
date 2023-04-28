const {expect} = require('chai')
const sinon = require('sinon')
const { salesListMock, newSaleMock, returnedRegisterSaleMock, returnedByIdSaleMock } = require('../unitMocks/productMock')
const { salesService } = require('../../../src/services')
const { salesController } = require('../../../src/controllers')

describe('Testes da camada Sales Controllers',  () => {
  describe('Verifica a listagem de vendas', () => {
    it('Testa a listagem de um array de vendas', async () => {      
      const res = {};
      const req = {};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'getAllSales').resolves({type:null, message: salesListMock})
      await salesController.getAllSales(req, res)
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(salesListMock);
      sinon.restore();
    })
    it('Testa a listagem pelo ID da venda', async() => {
        const res = {};
        const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'getSaleById').resolves({type: null, message:returnedByIdSaleMock })
      await salesController.getSaleById(req, res)
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(returnedByIdSaleMock);
      sinon.restore()
    })

    it('Testa o cadastro de uma venda', async() => {
    const res = {};      
    const req = {
        body: newSaleMock,
      };
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'registerSale').resolves({type: null, message:returnedRegisterSaleMock})
      await salesController.registerSale(req,res)
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(returnedRegisterSaleMock);
    })    
  }) 
  // describe('Verifica casos de Erros', () => {
  
  // })
})