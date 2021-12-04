const express = require('express')
const routes = express.Router()
const MercProduct = require('../service/product')

// api product
routes.get('/showProduct/:id',MercProduct.getProduct)
routes.post('/createProduct',MercProduct.createProduct)
routes.delete('/deleteProduct/:id',MercProduct.deleteProduct)
routes.put('/updateProduct/:id',MercProduct.updateProduct)

module.exports = routes