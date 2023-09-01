const { Sequelize, tourReserva, tourReserva } = require('../../database/models')

const putTourReservation = async (req, res) => {
    try {
        const tourAssigned = req.body.output
        for (const iterator of tourAssigned) {
            await tourReserva.update(
                { idTransport: iterator.idCar }, {
                where: {
                    id: iterator.idRes
                }
            })
        }
        res.send(200)
    } catch (error) {
        console.log("error", error)
    }
}
module.exports = {
    putTourReservation
}