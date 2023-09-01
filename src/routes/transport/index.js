const express = require('express')
const { postTransport, getTransport, putTransport } = require('../../controllers/transport')

const router = express.Router()

// router.get('/rol', getRoles)
router.post('/transport', postTransport)
router.get('/transport', getTransport)
router.put('/transport', putTransport)
module.exports = router
