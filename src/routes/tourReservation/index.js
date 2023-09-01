const express = require('express')
const authHandlerBasic = require('../../middlewares/authHandlerBasic')
const { putTourReservation } = require('../../controllers/tourReservation')

const router = express.Router()

router.put('/tourReservation', authHandlerBasic, putTourReservation)

module.exports = router
