const { transport } = require('../../database/models')

const postTransport = async (req, res) => {
    try {
        let response
        console.log("req.body", req.body)
        const { plate } = req.body
        const findTransport = await transport.findOne(
            {
                where: {
                    plate,
                    activo: 1
                }
            }
        )
        if (findTransport) {
            response = {
                data: findTransport,
                message: "El Vehiculo ya existe",
                status: "02"
            }
        }
        else {
            const data = await transport.create({
                ...req.body,
            })
            response = {
                data,
                message: "El Vehiculo fue Creado", status: "01"
            }
        }
        res.send(response)
    } catch (error) {
        console.log("error", error)
    }
}
const getTransport = async (req, res) => {
    try {
        const data = await transport.findAll(
            {
                where: {
                    activo: 1
                }
            }
        )
        res.send(data)
    } catch (error) {
        console.log("error", error)
    }
}
const putTransport = async (req, res) => {
    try {
        console.log("req.body", req.body)
        const data = await transport.update(
            { ...req.body }, {
            where: {
                id: req.body.id
            }
        }
        )
        res.send(data)

    } catch (error) {
        console.log("error", error)

    }
}

module.exports = {
    postTransport,
    getTransport,
    putTransport,
}