const express = require('express')
const { postProducts, getProducts, putProducts, postPackages } = require('../../controllers/products')

const router = express.Router()

// router.get('/rol', getRoles)
router.post('/products', postProducts)
router.get('/products', getProducts)
router.put('/products', putProducts)
module.exports = router
