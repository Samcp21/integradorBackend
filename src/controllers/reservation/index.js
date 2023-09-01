const { Sequelize, reservation, tourReserva } = require('../../database/models')

const { obtenerPackage, findPackages } = require('../../contants/QueryConstant')
const { QueryTypes } = require('sequelize')


const postReservation = async (req, res) => {
    try {
        console.log("req.body", req.body)
        const response = await reservation.create({
            ...req.body,
        })
        console.log("data_postReservation", response)
        for (const iterator of req.body.packages) {
            const { idTours, passenger, day } = iterator
            await tourReserva.create({
                idTours,
                idReservation: response.dataValues.id,
                passenger,
                // idTransport,
                fechaReserva: day
            })
        }
        res.send({ data: response.dataValues, status: true, message: "Reserva creada con exito" })
    } catch (error) {
        console.log("error", error)
    }
}
const getReservation = async (req, res) => {
    try {
        console.log("getReservation")
        const data = await reservation.findAll({
            where: {
                activo: 1
            }
        })
        res.send(data)
    } catch (error) {
        console.log("error", error)
    }
}
const putReservation = async (req, res) => {
    try {
        console.log("req.body", req.body)
        const { isDelete } = req.body
        if (!isDelete) {
            const { id } = req.body.form
            const listPackage = await tourReserva.findAll(
                {
                    where: {
                        idReservation: id,
                        activo: 1
                    }
                })
            for (const iterator of listPackage) {
                const findId = req.body.listPackages.find((x) => x.id == iterator.id)
                if (!findId) {
                    await tourReserva.update(
                        { ...req.body, activo: 0 }, {
                        where: {
                            id: iterator.id
                        }
                    })
                }
            }
            const filterPackageNotId = req.body.listPackages.filter((x) => !x.id)
            console.log("filterPackageNotId", filterPackageNotId)
            for (const iterator of filterPackageNotId) {
                await tourReserva.create({
                    idTours: iterator.idTours,
                    idReservation: id,
                    idTransport: iterator.idTransport,
                    passenger: iterator.passenger,
                    fechaReserva: iterator.day
                })
            }
        }
        const data = await reservation.update(
            { ...req.body }, {
            where: {
                id: req.body.id
            }
        })

        res.send(data)
    } catch (error) {
        console.log("error", error)
    }
}
const getPackages = async (req, res) => {
    try {
        const { idReserva } = req.params
        const data = await tourReserva.findAll(
            {
                where: {
                    idReservation: Number(idReserva),
                    activo: 1
                }
            }
        )
        res.send(data)
    } catch (error) {
        console.log("error", error)
    }
}

const filterForPackages = async (req, res) => {
    try {
        console.log("req.body_filterForPackages", req.body)
        const { idTours, date, idTransport } = req.body
        let filterDate = ' GROUP BY tr.idReservation '
        if (date) {
            if (date.length == 2) {
                filterDate = `and IFNULL(tr.fechaReserva BETWEEN "${date[0]}" AND "${date[1]}",true) GROUP BY tr.idReservation `

            }
            else {
                filterDate = `and tr.fechaReserva = IFNULL("${date}",tr.fechaReserva) GROUP BY tr.idReservation `
            }
        }
        console.log("filterDate", filterDate)
        console.log("query",obtenerPackage.concat(' ', filterDate))
        const data = await Sequelize.query(obtenerPackage.concat(' ', filterDate), {
            replacements: {
                idTours: idTours || null,
                idTransport: idTransport || null,
            },
            type: QueryTypes.SELECT,
            raw: true,
        })
        console.log("data", data)
        res.send(data)
    } catch (error) {
        console.log("error", error)
    }
}
const findPackagesReservation = async (req, res) => {
    try {
        console.log("req.body_findPackagesReservation", req.body)
        const { idTours, date, idTransport } = req.body
        let filterDate = ''
        if (date) {
            if (date.length == 2) {
                filterDate = `and IFNULL(tr.fechaReserva BETWEEN "${date[0]}" AND "${date[1]}",true)  `
            }
            else {
                filterDate = `and tr.fechaReserva = IFNULL("${date}",tr.fechaReserva)  `
            }

        }
        const data = await Sequelize.query(findPackages.concat('', filterDate), {
            replacements: {
                idTours: idTours || null,
                idTransport: idTransport || null,

            },
            type: QueryTypes.SELECT,
            raw: true,
        })
        console.log("data", data)
        res.send(data)
    } catch (error) {
        console.log("error", error)
    }
}
const generateReservation = async (req, res) => {
    try {
        console.log("hola")
        const { reservas, tours, cars } = req.body
        console.log("reservas", reservas)
        console.log("tours", tours)
        console.log("cars", cars)
        res.send([{
            idReserva: 20,
            idCar: 1
        }, {
            idReserva: 21,
            idCar: 3
        }, {
            idReserva: 22,
            idCar: 1
        }])
    } catch (error) {
        console.log("error", error)
    }
}
module.exports = {
    postReservation,
    getReservation,
    putReservation,
    getPackages,
    filterForPackages,
    findPackagesReservation,
    generateReservation

}