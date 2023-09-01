const express = require('express')
const { postPersons,
    getPersons,
    putPersons, } = require('../../controllers/clients')

const router = express.Router()

router.post('/clients', postPersons)
router.get('/clients', getPersons)
router.put('/clients', putPersons)
module.exports = router
