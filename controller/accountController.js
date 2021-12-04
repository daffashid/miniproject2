const express = require('express')
const routes = express.Router()
const MercAcc = require('../service/account')

// api account
routes.post('/createAccount',MercAcc.createAccount)
routes.delete('/deleteAccount/:id',MercAcc.deleteAccount)

module.exports = routes