const productListMock = [
  {
    id: 1,
    name: "Martelo de Thor"
  },
  {
    id: 2,
    name: "Traje de encolhimento"
  },
  {
    id: 3,
    name: "Escudo do Capitão América"
  }
]

const newProductMock = {      
    name: "new Product"
}
const oneProductMock = {
    id: 3,
    name: "Escudo do Capitão América"
}


const salesListMock = [
  {
    "saleId": 1,
    "date": "2023-04-28T03:42:19.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2023-04-28T03:42:19.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2023-04-28T03:42:19.000Z",
    "productId": 3,
    "quantity": 15
  }
]

const returnedByIdSaleMock = {
  "date": "2023-04-28T22:59:42.000Z",
  "productId": 3,
  "quantity": 15
}

const returnedRegisterSaleMock = {
  "id": 4,
  "itemsSold": [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ]}

const newSaleMock = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]

module.exports = {
  productListMock,
  oneProductMock,
  newProductMock,
  salesListMock,
  newSaleMock,
  returnedRegisterSaleMock,
  returnedByIdSaleMock
}