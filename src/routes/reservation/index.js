const express = require('express')
const { postReservation,
    getReservation,
    putReservation, getPackages, filterForPackages,findPackagesReservation, generateReservation } = require('../../controllers/reservation')
const authHandlerBasic = require('../../middlewares/authHandlerBasic')

const router = express.Router()

router.post('/reservation', authHandlerBasic, postReservation)
router.get('/reservation', authHandlerBasic, getReservation)
router.put('/reservation', authHandlerBasic, putReservation)
router.get('/packages/reserva/:idReserva', authHandlerBasic, getPackages)
router.post('/packages/filter', authHandlerBasic, filterForPackages)
router.post('/packages/find', authHandlerBasic, findPackagesReservation)
router.post('/reservation/distribution', authHandlerBasic, generateReservation)
module.exports = router
